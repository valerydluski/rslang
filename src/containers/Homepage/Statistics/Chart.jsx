import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import configureChartData from '../../../utils/configureChartData';
import './Styled/styles.css';

function Chart({ width, height, padding }) {
  const datum = configureChartData();
  let value = d3.max(datum.chartPoints, (d) => d.x);
  const xScale = d3
    .scaleLinear()
    .domain([datum.xMin, datum.xMax])
    .range([0, width - 2 * padding]);

  const xAxis = d3
    .axisBottom()
    .scale(xScale)
    .ticks(10)
    .tickSizeInner(-(height - 2 * padding))
    .tickSizeOuter(0);

  const yScale = d3
    .scaleLinear()
    .domain([datum.yMin, datum.yMax])
    .range([height - 2 * padding, 0]);

  const yAxis = d3
    .axisLeft()
    .scale(yScale)
    .tickFormat(d3.format('.0%'))
    .tickValues([0.2, 0.4, 0.6, 0.8, 1])
    .tickSizeInner(-(width - 2 * padding))
    .tickSizeOuter(0);

  const learnedArea = d3
    .area()
    .defined((d) => d.x <= value)
    .x((d) => xScale(d.x))
    .y0(() => yScale.range()[0])
    .y1((d) => yScale(d.y));

  const unlearnedArea = d3
    .area()
    .defined((d) => d.x >= value)
    .x((d) => xScale(d.x))
    .y0(() => yScale.range()[0])
    .y1((d) => yScale(d.y));

  const draw = () => {
    d3.selectAll('path').remove();
    d3.selectAll('g').remove();

    const canvas = d3.select('#canvas');

    const count = `Изучено: ${datum.reduxData[value].count} слов`;
    const date = `Дата: ${datum.reduxData[value].date.toLocaleDateString('ru-RU', {
      month: 'long',
      day: 'numeric',
    })}`;
    const learnedWords = `Всего изучено: ${datum.points[value].count} слов`;

    canvas
      .append('path')
      .datum(datum.chartPoints)
      .attr('d', learnedArea)
      .attr('transform', `translate(${padding}, ${padding})`)
      .attr('class', 'learned-area');

    canvas
      .append('path')
      .datum(datum.chartPoints)
      .attr('d', unlearnedArea)
      .attr('transform', `translate(${padding}, ${padding})`)
      .attr('class', 'unlearned-area');

    canvas
      .append('g')
      .attr('class', 'axis')
      .attr('transform', `translate(${padding}, ${height - padding})`)
      .call(xAxis);

    canvas
      .append('g')
      .attr('class', 'axis')
      .attr('transform', `translate(${padding}, ${padding})`)
      .call(yAxis);

    const info = canvas
      .append('g')
      .attr('transform', `translate(${padding + 20}, ${padding + 20})`);
    info
      .append('rect')
      .attr('width', 250)
      .attr('height', 95)
      .attr('rx', 20)
      .attr('ry', 20)
      .attr('class', 'info-rect');
    info.append('text').attr('x', 50).attr('y', 50).text(count).attr('class', 'info-text');
    info.append('text').attr('x', 50).attr('y', 30).text(date).attr('class', 'info-text');
    info.append('text').attr('x', 50).attr('y', 70).text(learnedWords).attr('class', 'info-text');
    info
      .append('rect')
      .attr('x', 25)
      .attr('y', 30)
      .attr('width', 4)
      .attr('height', 40)
      .attr('class', 'pointer-line')
      .attr('transform', 'translate(-2, 0)');
    info
      .append('circle')
      .attr('cx', 25)
      .attr('cy', 30)
      .attr('r', 7)
      .attr('class', 'pointer-circle');

    const pointer = canvas
      .append('g')
      .attr(
        'transform',
        `translate(${xScale(datum.chartPoints[value].x) + padding}, ${
          yScale(datum.chartPoints[value].y) + padding
        })`
      );

    pointer
      .append('rect')
      .attr('width', 4)
      .attr('height', height - 2 * padding - yScale(datum.chartPoints[value].y))
      .attr('class', 'pointer-line')
      .attr('transform', 'translate(-2, 0)');
    pointer.append('circle').attr('r', 7).attr('class', 'pointer-circle');
  };

  const initHandlers = () => {
    d3.select('#canvas')
      .on('mousemove', function calcPointerPosition() {
        const [x] = d3.mouse(this);
        const position = x - padding;
        value = datum.chartPoints.findIndex((item, index, array) => {
          const cur = xScale(item.x);
          if (index === 0) {
            const next = xScale(array[index + 1].x);
            if (position - cur <= next - position) {
              return true;
            }
          }
          if (cur >= position && index !== 0) {
            const prev = xScale(array[index - 1].x);
            if (cur - position <= position - prev) {
              return true;
            }
          }
          return false;
        });
        if (value === -1) return;
        draw();
      })
      .on('mouseleave', () => {
        value = d3.max(datum.chartPoints, (d) => d.x);
        draw();
      });
  };

  const updateChart = () => {
    d3.select('#canvas').attr('width', width).attr('height', height);
    draw();
    initHandlers();
  };

  useEffect(() => {
    updateChart();
  });

  return <svg id="canvas" />;
}

Chart.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  padding: PropTypes.number,
};

Chart.defaultProps = {
  width: 700,
  height: 500,
  padding: 50,
};

export default Chart;

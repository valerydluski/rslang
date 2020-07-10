import React from 'react';
import PropTypes from 'prop-types';
import { Circle } from 'rc-progress';
import { Translate } from 'react-redux-i18n';

export default function TotalProgress({ count, total }) {
  const percent = (count / total) * 100;
  return (
    <>
      <h3>
        <Translate value="LearnWords.progress" /> {percent.toFixed()}%
      </h3>
      <div className="total-progress-container">
        <Circle
          className="total-progress"
          percent={percent}
          strokeWidth="7"
          strokeColor="#6550DE"
          trailWidth="7"
          trailColor="#C4C4C4"
        />
      </div>
    </>
  );
}

TotalProgress.propTypes = {
  count: PropTypes.number,
  total: PropTypes.number,
};

TotalProgress.defaultProps = {
  count: 0,
  total: 0,
};

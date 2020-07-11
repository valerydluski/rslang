import React from 'react';
import PropTypes from 'prop-types';

export default function DayInfo({ title, count, total }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{`${+count}/${total}`}</p>
    </div>
  );
}

DayInfo.propTypes = {
  title: PropTypes.string,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  total: PropTypes.number,
};

DayInfo.defaultProps = {
  title: '',
  count: 0,
  total: 0,
};

import React, { PropTypes } from 'react';
import './styles';


const PlayerProgressBar = ({ max, current = 0 }) => {
  const barWidth = Math.floor(100 * current / max);
  const barWidthStyle = { width: `${barWidth}%` };

  return (
    <div className="PlayerProgressBar">
      <div style={barWidthStyle} className="PlayerProgressBar__current" />
    </div>
  );
};

PlayerProgressBar.propTypes = {
  max: PropTypes.number.isRequired,
  current: PropTypes.number,
};


export default PlayerProgressBar;

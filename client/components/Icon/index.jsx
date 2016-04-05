import React, { PropTypes } from 'react';


const Icon = ({ name, className = '', onClick = () => {} }) => (
  <i
    className={`fa fa-${name} Icon Icon-${name} ${className}`}
    onClick={onClick}
  />
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};


export default Icon;

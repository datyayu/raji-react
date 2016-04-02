import React, { PropTypes } from 'react';


const Icon = ({ name }) => (
  <i className={`fa fa-${name} Icon Icon-${name}`} />
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};


export default Icon;

import React, { PropTypes } from 'react';
import './styles';


const MobileContentBlocker = ({ isActive = false }) => {
  const styleClasses = isActive
    ? 'MobileContentBlocker is-active'
    : 'MobileContentBlocker';

  return (
    <div className={styleClasses} />
  );
};

MobileContentBlocker.propTypes = {
  isActive: PropTypes.bool,
};


export default MobileContentBlocker;

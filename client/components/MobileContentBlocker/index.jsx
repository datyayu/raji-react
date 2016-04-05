import React, { PropTypes } from 'react';
import './styles';


const MobileContentBlocker = ({ isActive = false, closeAction = () => {} }) => {
  const styleClasses = isActive
    ? 'MobileContentBlocker is-active'
    : 'MobileContentBlocker';

  return (
    <div
      className={styleClasses}
      onClick={closeAction}
    />
  );
};

MobileContentBlocker.propTypes = {
  isActive: PropTypes.bool,
  closeAction: PropTypes.func,
};


export default MobileContentBlocker;

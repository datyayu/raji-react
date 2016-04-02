import React, { PropTypes } from 'react';
import './styles';


const HeaderTitle = ({ text, isShowing = true }) => {
  const styleClasses = isShowing
    ? 'HeaderTitle is-showing'
    : 'HeaderTitle';

  return (
    <h1 className={styleClasses}>{text}</h1>
  );
};

HeaderTitle.propTypes = {
  text: PropTypes.string.isRequired,
  isShowing: PropTypes.bool,
};


export default HeaderTitle;

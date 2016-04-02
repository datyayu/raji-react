import React, { PropTypes } from 'react';
import './styles';


const SidebarLogo = ({ img, text, url = '/' }) => (
  <a className="SidebarLogo" href={url}>
    <h1 className="SidebarLogo__text">{text}</h1>
    <img src={img} className="SidebarLogo__img" />
  </a>
);


SidebarLogo.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
};


export default SidebarLogo;

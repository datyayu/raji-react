import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './styles';


const SidebarLogo = ({ img, text, url = '/' }) => (
  <Link to={url} className="SidebarLogo">
    <h1 className="SidebarLogo__text">{text}</h1>
    <img src={img} className="SidebarLogo__img" />
  </Link>
);


SidebarLogo.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
};


export default SidebarLogo;

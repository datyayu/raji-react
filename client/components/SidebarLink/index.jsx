import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './styles';


const SidebarLink = ({ text, url = '/' }) => (
  <li className="SidebarLink">
    <Link to={url} className="SidebarLink__link">
      <span className="SidebarLink__dash">——</span> {text}
    </Link>
  </li>
);


SidebarLink.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
};


export default SidebarLink;

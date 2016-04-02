import React, { PropTypes } from 'react';
import './styles';


const SidebarLink = ({ text, url = '#' }) => (
  <li className="SidebarLink">
    <a href={url} className="SidebarLink__link">
      <span className="SidebarLink__dash">——</span> {text}
    </a>
  </li>
);


SidebarLink.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
};


export default SidebarLink;

import React, { PropTypes } from 'react';
import './styles';

import SidebarLinkList from '../SidebarLinkList';
import SidebarLogo from '../SidebarLogo';


const Sidebar = ({ links, logo, isActive = false }) => {
  const styleClasses = isActive ? 'Sidebar is-active' : 'Sidebar';

  return (
    <div className={styleClasses}>
      <SidebarLogo {...logo} />
      <SidebarLinkList links={links} />
    </div>
  );
};


Sidebar.propTypes = {
  isActive: PropTypes.bool,
  logo: PropTypes.shape({
    img: PropTypes.string,
    text: PropTypes.string,
    url: PropTypes.string,
  }),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.String,
      url: PropTypes.String,
    })
  ),
};


export default Sidebar;

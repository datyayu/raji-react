import React, { PropTypes } from 'react';
import './styles';

import SidebarLink from '../SidebarLink';


const SidebarLinkList = ({ links = [] }) => (
  <ul className="SidebarLinkList">
    {
      links.map((link, idx) => <SidebarLink key={idx} {...link} />)
    }
  </ul>
);

SidebarLinkList.propTypes = {
  links: PropTypes.array,
};


export default SidebarLinkList;

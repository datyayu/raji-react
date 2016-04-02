import React from 'react';

import Sidebar from './components/Sidebar';


const links = [
  { text: 'home', url: '#/' },
  { text: 'player', url: '#/player' },
  { text: 'artists', url: '#/artists' },
  { text: 'albums', url: '#/albums' },
];

const logo = {
  img: '/assets/logo.svg',
  text: 'raji',
  url: '#/',
};

const sidebarIsActive = true;


const RootComponent = () => (
  <div>
    <Sidebar isActive={sidebarIsActive} logo={logo} links={links} />
  </div>
);


export default RootComponent;

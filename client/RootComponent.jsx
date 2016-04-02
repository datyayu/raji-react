import React from 'react';
import './rootStyles.sass';

import Sidebar from './components/Sidebar';
import AlbumListView from './views/AlbumListView.jsx';


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

const sidebarIsActive = false;


const RootComponent = () => (
  <div>
    <Sidebar isActive={sidebarIsActive} logo={logo} links={links} />
    <AlbumListView />
  </div>
);


export default RootComponent;

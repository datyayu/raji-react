import React, { PropTypes } from 'react';
import './rootStyles.sass';

import ApplicationContainer from './containers/application';

import Sidebar from './components/Sidebar';
import MobileContentBlocker from './components/MobileContentBlocker';
import PlayerView from './views/PlayerView';


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


const RootComponent = ({ applicationState, applicationActions }) => (
  <div>
    <Sidebar isActive={applicationState.showSidemenu} logo={logo} links={links} />
    <PlayerView />
    <MobileContentBlocker
      isActive={applicationState.showSidemenu}
      closeAction={applicationActions.toggleSidemenu}
    />
  </div>
);

RootComponent.propTypes = {
  applicationState: PropTypes.shape({
    showSidemenu: PropTypes.bool.isRequired,
  }),
  applicationActions: PropTypes.shape({
    toggleSidemenu: PropTypes.func.isRequired,
  }),
};


export default ApplicationContainer(RootComponent);

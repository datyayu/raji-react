import React, { PropTypes } from 'react';
import './rootStyles.sass';

import ApplicationContainer from './containers/application';

import Sidebar from './components/Sidebar';
import MobileContentBlocker from './components/MobileContentBlocker';


const links = [
  { text: 'home', url: '/' },
  { text: 'player', url: '/player' },
  { text: 'artists', url: '/artists' },
  { text: 'albums', url: '/albums' },
];

const logo = {
  img: '/assets/logo.svg',
  text: 'raji',
};


const RootComponent = ({ applicationState, applicationActions, children }) => (
  <div>
    <Sidebar
      logo={logo}
      links={links}
      isActive={applicationState.showSidemenu}
    />

    { children }

    <MobileContentBlocker
      isActive={applicationState.showSidemenu || applicationState.showPlaylist}
      closeAction={applicationActions.closeSidelists}
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
  children: PropTypes.object,
};


export default ApplicationContainer(RootComponent);

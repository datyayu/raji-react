import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Store from './store';

import PlayerView from './views/PlayerView';
import AlbumListView from './views/AlbumListView';
import ArtistListView from './views/ArtistListView';
import RootComponent from './RootComponent';


const history = syncHistoryWithStore(browserHistory, Store);


const ApplicationRouter = () => (
  <Router history={history}>
    <Route path="/" component={RootComponent}>
      <IndexRoute component={PlayerView} />
      <Route path="player" component={PlayerView} />
      <Route path="artists" component={ArtistListView} />
      <Route path="albums" component={AlbumListView} />
    </Route>
  </Router>
);


export default ApplicationRouter;

import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Store from './store';
import RootComponent from './RootComponent';

import PlayerView from './views/PlayerView';
import AlbumListView from './views/AlbumListView';
import ArtistListView from './views/ArtistListView';
import AlbumIndividualView from './views/AlbumIndividualView';
import ArtistIndividualView from './views/ArtistIndividualView';


const history = syncHistoryWithStore(browserHistory, Store);


const ApplicationRouter = () => (
  <Router history={history}>
    <Route path="/" component={RootComponent}>
      <IndexRoute component={PlayerView} />
      <Route path="player" component={PlayerView} />

      <Route path="albums" component={AlbumListView} />
      <Route path="albums/:id" component={AlbumIndividualView} />

      <Route path="artists" component={ArtistListView} />
      <Route path="artists/:id" component={ArtistIndividualView} />
    </Route>
  </Router>
);


export default ApplicationRouter;

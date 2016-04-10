import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import PlayerView from './views/PlayerView';
import AlbumListView from './views/AlbumListView';
import ArtistListView from './views/ArtistListView';
import RootComponent from './RootComponent';


const ApplicationRouter = () => (
  <Router history={browserHistory}>
    <Route path="/" component={RootComponent}>
      <Route path="player" component={PlayerView} />
      <Route path="artists" component={ArtistListView} />
      <Route path="albums" component={AlbumListView} />
    </Route>
  </Router>
);

export default ApplicationRouter;

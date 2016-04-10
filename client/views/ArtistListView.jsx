import React, { PropTypes } from 'react';

import ApplicationContainers from '../containers/application';
import ArtistsContainer from '../containers/artists';

import Header from '../components/Header';
import ArtistList from '../components/ArtistList';


const ArtistListView = ({ artistsState, applicationActions }) => (
  <main className="Content">
    <Header text="Artists" toggleAction={applicationActions.toggleSidemenu} />
    <ArtistList artists={artistsState.artists} />
  </main>
);

ArtistListView.propTypes = {
  artistsState: PropTypes.shape({
    artists: PropTypes.array,
  }),
  applicationActions: PropTypes.shape({
    toggleSidemenu: PropTypes.func,
  }),
};


export default ApplicationContainers(ArtistsContainer(ArtistListView));

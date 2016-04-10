import React, { PropTypes } from 'react';

import ArtistsContainer from '../containers/artists';

import Header from '../components/Header';
import ArtistList from '../components/ArtistList';


const ArtistListView = ({ artistsState }) => (
  <main className="Content">
    <Header text="Artists" />
    <ArtistList artists={artistsState.artists} />
  </main>
);

ArtistListView.propTypes = {
  artistsState: PropTypes.shape({
    artists: PropTypes.array,
  }),
};


export default ArtistsContainer(ArtistListView);

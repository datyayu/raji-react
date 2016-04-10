import React, { PropTypes } from 'react';

import AlbumsContainer from '../containers/albums';


import Header from '../components/Header';
import AlbumList from '../components/AlbumList';


const AlbumListView = ({ albumsState }) => (
  <main className="Content">
    <Header text="Iguchi Yuka" />
    <AlbumList albums={albumsState.albums} />
  </main>
);

AlbumListView.propTypes = {
  albumsState: PropTypes.shape({
    album: PropTypes.array,
  }),
};


export default AlbumsContainer(AlbumListView);

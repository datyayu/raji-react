import React, { PropTypes } from 'react';
import './styles';

import ArtistPopularAlbum from '../ArtistPopularAlbum';


const ArtistPopularAlbumsList = ({ artistId, albums = [] }) => (
  <ul className="ArtistPopularAlbumsList">
    {
      albums.map(album => <ArtistPopularAlbum key={album.id} {...album} />)
    }

    <a href={`#/artist/${artistId}`} className="ArtistPopularAlbumsList__text">More ></a>
  </ul>
);

ArtistPopularAlbumsList.propTypes = {
  artistId: PropTypes.number.isRequired,
  albums: PropTypes.array,
};


export default ArtistPopularAlbumsList;

import React, { PropTypes } from 'react';
import './styles';

import ArtistPopularAlbum from '../ArtistPopularAlbum';


const ArtistPopularAlbumsList = ({ artistId, albums = [] }) => (
  <ul className="ArtistPopularAlbumList">
    {
      albums.map(album => <ArtistPopularAlbum key={album.id} {...album} />)
    }
    {
      albums.length !== 0
        ? <a href={`#/artist/${artistId}`} className="ArtistPopularAlbumList__text">More ></a>
        : null
    }
  </ul>
);

ArtistPopularAlbumsList.propTypes = {
  artistId: PropTypes.number.isRequired,
  albums: PropTypes.array,
};


export default ArtistPopularAlbumsList;

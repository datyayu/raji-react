import React, { PropTypes } from 'react';
import './styles';

import ArtistPopularAlbumList from '../ArtistPopularAlbumList';
import ArtistName from '../ArtistName';


const ArtistInfo = ({ id, name, albums = [] }) => (
  <div className="ArtistInfo">
    <ArtistName id={id} name={name} />
    <ArtistPopularAlbumList artistId={id} albums={albums} />
  </div>
);

ArtistInfo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  albums: PropTypes.array,
};


export default ArtistInfo;

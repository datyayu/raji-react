import React, { PropTypes } from 'react';
import './styles';

import Album from '../Album';


const AlbumList = ({ albums = [] }) => (
  <ul className="AlbumList">
    {
      albums.map(album => <Album key={album.id} {...album} />)
    }
  </ul>
);

AlbumList.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};


export default AlbumList;

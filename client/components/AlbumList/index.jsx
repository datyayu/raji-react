import React, { PropTypes } from 'react';
import './styles';

import Album from '../Album';


const AlbumList = ({ albums = [] }) => (
  <ul className="AlbumList">
    {
      albums.map(album => <Album key={album.id} id={album.id} {...album.info} />)
    }
  </ul>
);

AlbumList.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};


export default AlbumList;

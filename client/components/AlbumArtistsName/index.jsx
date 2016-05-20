import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './styles';


const AlbumArtistName = ({ id, name, last = false }) => (
  <Link to={`/artists/${id}`}>
    <h1 className="AlbumArtistName">
      {name}
      {last ? ', ' : '' }
    </h1>
  </Link>
);


AlbumArtistName.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  last: PropTypes.bool,
};


export default AlbumArtistName;

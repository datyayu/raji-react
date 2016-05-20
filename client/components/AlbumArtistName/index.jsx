import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './styles';


const AlbumArtistName = ({ id, name, last = false }) => (
  <Link to={`/artists/${id}`}>
    <span className="AlbumArtistName">
      {name}
      {last ? '' : ', ' }
    </span>
  </Link>
);


AlbumArtistName.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  last: PropTypes.bool,
};


export default AlbumArtistName;

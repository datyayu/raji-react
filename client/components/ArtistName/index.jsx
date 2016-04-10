import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import './styles';


const ArtistName = ({ id, name }) => (
  <Link to={`/artists/${id}`} className="ArtistName">
    <h2 className="ArtistName__text">{name}</h2>
  </Link>
);

ArtistName.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};


export default ArtistName;

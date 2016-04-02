import React, { PropTypes } from 'react';
import './styles';


const ArtistName = ({ id, name }) => (
  <a href={`#/artists/${id}`} className="ArtistName">
    <h2 className="ArtistName__text">{name}</h2>
  </a>
);

ArtistName.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};


export default ArtistName;

import React, { PropTypes } from 'react';
import './styles.sass';


const ArtistImage = ({ id, name, image = '/assets/img/defaultArtist.jpg' }) => (
  <a href={`#/artist/${id}`} className="ArtistImage__link">
    <img src={image} alt={name} className="ArtistImage" />
  </a>
);

ArtistImage.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
};


export default ArtistImage;

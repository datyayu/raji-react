import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './styles.sass';


const ArtistImage = ({ id, name, image = '/assets/defaultArtist.jpg' }) => (
  <Link to={`/artists/${id}`} className="ArtistImage__link">
    <img src={image} alt={name} className="ArtistImage" />
  </Link>
);

ArtistImage.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
};


export default ArtistImage;

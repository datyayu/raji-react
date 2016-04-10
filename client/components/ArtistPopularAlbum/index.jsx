import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './styles';


const ArtistPopularAlbum = ({ id, title, image = '/assets/defaultAlbum.png' }) => (
  <li className="ArtistPopularAlbum">
    <Link to={`/albums/${id}`} className="ArtistPopularAlbum__link">
      <img src={image} alt={title} className="ArtistPopularAlbum__image" />
    </Link>
  </li>
);

ArtistPopularAlbum.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};


export default ArtistPopularAlbum;

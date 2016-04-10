import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './styles';


const Album = ({ id, title, image = '/assets/defaultAlbum.png' }) => (
  <li className="Album">
    <Link to={`/albums/${id}`} className="Album__link">
      <img src={image} alt={title} className="Album__img" />
      <h3 className="Album__title">{title}</h3>
    </Link>
  </li>
);


Album.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};


export default Album;

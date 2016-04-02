import React, { PropTypes } from 'react';
import './styles';


const Album = ({ id, title, image = '/assets/defaultAlbum.png' }) => (
  <li className="Album">
    <a href={`#/albums/${id}`} className="Album__link">
      <img src={image} alt={title} className="Album__img" />
      <h3 className="Album__title">{title}</h3>
    </a>
  </li>
);


Album.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};


export default Album;

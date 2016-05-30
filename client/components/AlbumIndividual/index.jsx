import React, { PropTypes } from 'react';
import './styles';

import AlbumArtistName from '../AlbumArtistName';


const AlbumIndividual = ({ title, image = '/assets/defaultAlbum.png', artists = [] }) => (
  title ?
    <div className="AlbumIndividual">
      <img src={image} alt={title} className="AlbumIndividual__img" />
      <h1 className="AlbumIndividual__title">{title}</h1>
      <h3>
        {
          artists.map((artist, idx) =>
            <AlbumArtistName key={idx} last={idx + 1 === artists.length} {...artist} />
          )
        }
      </h3>
    </div>
    :
    <div>Loading...</div>
);


AlbumIndividual.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.required,
      id: PropTypes.number.isRequired,
    })
  ),
};


export default AlbumIndividual;

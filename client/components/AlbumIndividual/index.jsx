import React, { PropTypes } from 'react';
import './styles';

import AlbumArtistName from '../AlbumArtistName';


const AlbumIndividual = ({ id, title, image = '/assets/defaultAlbum.png', artists = [] }) => (
  id ?
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
  id: PropTypes.number,
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

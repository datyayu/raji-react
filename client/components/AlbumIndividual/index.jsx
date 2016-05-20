import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './styles';


const AlbumIndividual = ({ id, title, image = '/assets/defaultAlbum.png', artists = [] }) => (
  id ?
    <div className="AlbumIndividual">
      <img src={image} alt={title} className="AlbumIndividual__img" />
      <h1 className="AlbumIndividual__title">{title}</h1>
      <h3>
        {
          artists.map((artist, idx) =>
            <Link key={idx} to={`/artists/${artist.id}`}>
              {artist.name}
              {idx + 1 < artists.length ? ', ' : '' }
            </Link>
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

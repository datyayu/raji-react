import React, { PropTypes } from 'react';
import './styles';


const ArtistIndividual = ({ id, name, image, bio }) => (
  id !== null ?
    <div className="ArtistIndividual">
      <img src={image} className="ArtistIndividual__img" />
      <h1 className="ArtistIndividual__name">{name}</h1>
      <p className="ArtistIndividual__bio">{bio}</p>
    </div>
    :
    <div>Loading...</div>
);


ArtistIndividual.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  bio: PropTypes.string,
};


export default ArtistIndividual;

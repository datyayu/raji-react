import React, { PropTypes } from 'react';
import './styles';

import Artist from '../Artist';


const ArtistList = ({ artists }) => (
  <ul className="ArtistList">
    {
      artists.map(artist => <Artist key={artist.id} {...artist} />)
    }
  </ul>
);

ArtistList.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
      albums: PropTypes.array,
      songs: PropTypes.song,
    })
  ),
};


export default ArtistList;

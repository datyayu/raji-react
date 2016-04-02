import React, { PropTypes } from 'react';
import './styles';

import ArtistImage from '../ArtistImage';
import ArtistInfo from '../ArtistInfo';


const Artist = (props) => (
  <li className="Artist">
    <ArtistImage {...props} />
    <ArtistInfo {...props} />
  </li>
);

Artist.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  albums: PropTypes.array,
};


export default Artist;

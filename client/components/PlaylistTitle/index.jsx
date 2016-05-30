import React from 'react';
import './styles';


const PlaylistTitle = ({ showInfo = true }) => (
  showInfo ?
    <p className="PlaylistTitle"> Current playlist </p>
  :
    <p className="PlaylistTitle"> Songs included </p>
);


PlaylistTitle.propTypes = { showInfo: React.PropTypes.bool };


export default PlaylistTitle;

import React, { PropTypes } from 'react';


const PlaylistItem = ({ info, isPlaying = false }) => (
  <li className={`Song ${isPlaying ? 'is-playing' : ''}`} >
    <div className="Song-info">
      <img className="Song-image" src={info.image} />

      <div className="Song-desc">
        <p className="Song-text"> {info.title} </p>
        <p className="Song-text"> { (info.artist || [{}]).map(a => a.name).join(', ') } </p>
      </div>

      <div className="Song-icons">
        <i className={`fa Song-icon fa-${isPlaying ? 'pause' : 'play'}`}></i>
        <i className="fa fa-heart Song-icon"></i>
        <i className="fa fa-plus Song-icon"></i>
      </div>
    </div>
  </li>
);


PlaylistItem.propTypes = {
  isPlaying: PropTypes.bool,
  currentSongId: PropTypes.number,
  info: PropTypes.shape({
    artists: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })),
    image: PropTypes.string,
    title: PropTypes.string,
  }),
};


export default PlaylistItem;

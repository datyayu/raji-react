import React, { PropTypes } from 'react';
import './styles';

const PlaylistItem = ({ info, isPlaying = false }) => (
  <li className={`PlaylistItem ${isPlaying ? 'is-playing' : ''}`} >
  <div className="PlaylistItem__info">
      <img className="PlaylistItem__image" src={info.album.image} />

      <div className="PlaylistItem__desc">
        <div className="PlaylistItem__textContainer">
          <p className="PlaylistItem__text"> {info.title} </p>
          <p className="PlaylistItem__text">
            { (info.artists || []).map(a => a.name).join(', ') }
          </p>
        </div>

        <div className="PlaylistItem__icons">
          <i className={`PlaylistItem__icon fa fa-${isPlaying ? 'pause' : 'play'}`}></i>
          <i className="PlaylistItem__icon fa fa-heart"></i>
          <i className="PlaylistItem__icon fa fa-plus"></i>
        </div>
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

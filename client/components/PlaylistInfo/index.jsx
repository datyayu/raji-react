import React, { PropTypes } from 'react';


const PlaylistInfo = ({ info }) => (
  !info ?
    <img src="/public/assets/img/spinner_dark.gif" />
  :
    <div className="Playlist-info is-active">
      <img className="Playlist-infoImage" src={info.image} />
      <div className="Playlist-infoText">
        <p className="Playlist-text"> {info.title} </p>
        <p className="Playlist-text"> by {info.artists.join(',')} </p>
      </div>
    </div>
);

PlaylistInfo.propTypes = {
  info: PropTypes.shape({
    image: PropTypes.string,
    artists: PropTypes.arrayOf(PropTypes.string),
  }),
};


export default PlaylistInfo;

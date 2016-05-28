import React, { PropTypes } from 'react';
import './styles';

const PlaylistInfo = ({ info }) => (
  !info ?
    <img src="/public/assets/img/spinner_dark.gif" />
  :
    <div className="PlaylistInfo is-active">
      <img className="PlaylistInfo__image" src={info.image} />
      <div className="PlaylistInfo__textContainer">
        <p className="PlaylistInfo__text"> {info.title} </p>
        <p className="PlaylistInfo__text"> by {info.author} </p>
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

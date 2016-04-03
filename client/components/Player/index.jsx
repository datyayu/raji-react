import React, { PropTypes } from 'react';
import './styles';

import PlayerInfo from '../PlayerInfo';
import PlayerControls from '../PlayerControls';


const Player = ({ player, playlist = [] }) => (
  <div className="Player">
    <PlayerInfo {...playlist[player.currentSongId]} />
    <PlayerControls {...player} />
  </div>
);

Player.propTypes = {
  player: PropTypes.shape({
    durationTime: PropTypes.number,
    currentTime: PropTypes.number,
    isPlaying: PropTypes.bool,
    isRandom: PropTypes.bool,
    isLooped: PropTypes.bool,
    volume: PropTypes.number,
    currentSongId: PropTypes.number.isRequired,
  }).isRequired,
  playlist: PropTypes.array,
};


export default Player;

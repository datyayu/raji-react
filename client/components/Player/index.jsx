import React, { PropTypes } from 'react';
import './styles';

import PlayerInfo from '../PlayerInfo';
import PlayerControls from '../PlayerControls';


const Player = ({ player, playlist = [] }) => (
  <div className="Player">
    <PlayerInfo {...playlist.songs[player.currentSongId]} />
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
    currentSongId: PropTypes.number,
  }).isRequired,
  playlist: PropTypes.shape({
    songs: PropTypes.array,
    info: PropTypes.object,
  }),
};


export default Player;

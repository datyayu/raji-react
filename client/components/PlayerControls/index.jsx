import React, { PropTypes } from 'react';
import './styles';

import Icon from '../Icon';
import PlayerProgressBar from '../PlayerProgressBar';

const PlayerControls = ({
  isRandom = false,
  isLooped = false,
  isPlaying = false,
  durationTime = 0,
  playedTime = 0,
}) => {
  const randomClass = isRandom ? 'is-active' : '';
  const loopClass = isLooped ? 'is-active' : '';
  const playingIcon = isPlaying ? 'pause' : 'play';

  return (
    <div className="PlayerControls">
      <PlayerProgressBar max={durationTime} current={playedTime} />

      <div className="PlayerControls__icons">
        <Icon name="random" className={randomClass} />
        <Icon name="backward" />
        <Icon name={playingIcon} />
        <Icon name="forward" />
        <Icon name="refresh" className={loopClass} />
      </div>
    </div>
  );
};


PlayerControls.propTypes = {
  durationTime: PropTypes.number,
  playedTime: PropTypes.number,
  isPlaying: PropTypes.bool,
  isRandom: PropTypes.bool,
  isLooped: PropTypes.bool,
};


export default PlayerControls;

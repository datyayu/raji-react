import React, { PropTypes } from 'react';
import './styles';


import PlaylistTitle from '../PlaylistTitle';
import PlaylistInfo from '../PlaylistInfo';
import PlaylistSongList from '../PlaylistSongList';

const Playlist = ({
  playlist,
  currentSongId,
  isVisible = false,
  showInfo = true,
  isPlaying = false,
}) => (
  <div className={`Playlist ${isVisible ? 'is-active' : ''}`}>
    <PlaylistTitle showInfo={showInfo} />
    <PlaylistInfo info={playlist.info} show={showInfo && playlist} />
    {
      playlist === null ?
        <img src="/public/assets/img/spinner_dark.gif" />
      :
        <PlaylistSongList
          songs={playlist.songs}
          currentSongId={currentSongId}
          isPlaying={isPlaying}
        />
      }
  </div>
);


Playlist.propTypes = {
  showInfo: PropTypes.bool,
  currentSongId: PropTypes.number,
  isPlaying: PropTypes.bool,
  isVisible: PropTypes.bool,
  playlist: PropTypes.shape({
    info: PropTypes.object,
    songs: PropTypes.arrayOf(React.PropTypes.object),
  }),
};


export default Playlist;

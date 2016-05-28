import React, { PropTypes } from 'react';
import './styles';

import PlaylistItem from '../PlaylistItem';


const PlaylistSongList = ({ songs, currentSongId, isPlaying = false }) => (
  <ul className="PlaylistSongList">
  {
    songs.map((song) =>
      <PlaylistItem
        key={song.id}
        info={song}
        isPlaying={isPlaying && song.id === currentSongId}
      />
    )
  }
  </ul>
);

PlaylistSongList.propTypes = {
  isPlaying: PropTypes.bool,
  currentSongId: PropTypes.number.isRequired,
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};


export default PlaylistSongList;

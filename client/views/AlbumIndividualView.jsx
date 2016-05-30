import React, { PropTypes } from 'react';

import ApplicationContainer from '../containers/application';
import AlbumIndividualContainer from '../containers/albumIndividual';

import Header from '../components/Header';
import AlbumIndividual from '../components/AlbumIndividual';
import Playlist from '../components/Playlist';


const AlbumIndividualView = ({ applicationState, albumState = {}, applicationActions }) => (
  <main className="Content--with-playlist">
    <div className="Content">
      <Header
        text={(albumState.showingAlbum.info || {}).title || 'Loading...'}
        toggleAction={applicationActions.toggleSidemenu}
        togglePlaylist={applicationActions.togglePlaylist}
        playlistVisible={applicationState.showPlaylist}
        playlistIconVisible
        hasPlaylist
      />
      <AlbumIndividual {...albumState.showingAlbum.info || {}} />
    </div>
    <Playlist
      playlist={albumState.showingAlbum}
      isVisible={applicationState.showPlaylist}
      currentSongId={1}
      showInfo={false}
    />
  </main>
);

AlbumIndividualView.propTypes = {
  albumState: PropTypes.object,
  applicationState: PropTypes.object,
  applicationActions: PropTypes.shape({
    toggleSidemenu: PropTypes.func,
  }),
};


export default ApplicationContainer(
  AlbumIndividualContainer(
    AlbumIndividualView
  )
);

import React, { PropTypes } from 'react';

import ApplicationContainers from '../containers/application';
import AlbumIndividualContainer from '../containers/albumIndividual';

import Header from '../components/Header';
import AlbumIndividual from '../components/AlbumIndividual';


const AlbumIndividualView = ({ albumState = {}, applicationActions }) => {
  console.log(albumState.showingAlbum);

  return (
    <main className="Content">
      <Header
        text={albumState.showingAlbum.title || 'Loading...'}
        toggleAction={applicationActions.toggleSidemenu}
      />
      <AlbumIndividual {...albumState.showingAlbum} />
    </main>
  );
};

AlbumIndividualView.propTypes = {
  albumState: PropTypes.object,
  applicationActions: PropTypes.shape({
    toggleSidemenu: PropTypes.func,
  }),
};


export default ApplicationContainers(
  AlbumIndividualContainer(
    AlbumIndividualView
  )
);

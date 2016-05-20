import React, { PropTypes } from 'react';

import ApplicationContainers from '../containers/application';
import ArtistIndividualContainer from '../containers/artistIndividual';

import Header from '../components/Header';
import ArtistIndividual from '../components/ArtistIndividual';


const ArtistsIndividualView = ({ artistState = {}, applicationActions }) => (
  <main className="Content">
    <Header
      text={artistState.showingArtist.name || 'Loading...'}
      toggleAction={applicationActions.toggleSidemenu}
    />
    <ArtistIndividual {...artistState.showingArtist} />
  </main>
);

ArtistsIndividualView.propTypes = {
  artistState: PropTypes.object,
  applicationActions: PropTypes.shape({
    toggleSidemenu: PropTypes.func,
  }),
};


export default ApplicationContainers(
  ArtistIndividualContainer(
    ArtistsIndividualView
  )
);

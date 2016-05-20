import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as artistsActions from '../actions/artists';


function ArtistIndividualContainer(ChildComponent) {
  class ArtistIndividualComponent extends Component {
    componentDidMount() {
      this.props.artistsActions.fetchArtist(this.props.artistId);
    }

    render() {
      return (<ChildComponent {...this.props} />);
    }
  }

  ArtistIndividualComponent.propTypes = {
    routingState: PropTypes.object,
    artistState: PropTypes.object,
    artistId: PropTypes.number.isRequired,
    artistsActions: PropTypes.object,
  };

  const mapStateToProps = (state, ownProps) => ({
    routingState: state.routing,
    artistState: state.artists,
    artistId: parseInt(ownProps.params.id, 10),
  });

  const mapActionsToProps = (dispatch) => ({
    artistsActions: bindActionCreators(artistsActions, dispatch),
  });


  return connect(mapStateToProps, mapActionsToProps)(ArtistIndividualComponent);
}


export default ArtistIndividualContainer;

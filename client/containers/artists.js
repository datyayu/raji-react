import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as artistsActions from '../actions/artists';


function ArtistsContainer(ChildComponent) {
  class ArtistsComponent extends Component {
    componentDidMount() {
      this.props.artistsActions.fetchArtists();
    }

    render() {
      return (<ChildComponent {...this.props} />);
    }
  }

  ArtistsComponent.propTypes = {
    artistsActions: PropTypes.object,
    artistsState: PropTypes.object,
  };


  const mapStateToProps = (state) => ({
    artistsState: state.artists,
  });

  const mapActionsToProps = (dispatch) => ({
    artistsActions: bindActionCreators(artistsActions, dispatch),
  });


  return connect(mapStateToProps, mapActionsToProps)(ArtistsComponent);
}


export default ArtistsContainer;

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as albumsActions from '../actions/albums';


function AlbumsContainer(ChildComponent) {
  class AlbumsComponent extends Component {
    componentDidMount() {
      this.props.albumsActions.fetchAlbum(this.props.albumId);
    }

    render() {
      return (<ChildComponent {...this.props} />);
    }
  }

  AlbumsComponent.propTypes = {
    routingState: PropTypes.object,
    albumState: PropTypes.object,
    albumId: PropTypes.number.isRequired,
    albumsActions: PropTypes.object,
  };

  const mapStateToProps = (state, ownProps) => ({
    routingState: state.routing,
    albumState: state.albums,
    albumId: parseInt(ownProps.params.id, 10),
  });

  const mapActionsToProps = (dispatch) => ({
    albumsActions: bindActionCreators(albumsActions, dispatch),
  });


  return connect(mapStateToProps, mapActionsToProps)(AlbumsComponent);
}


export default AlbumsContainer;

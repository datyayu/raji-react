import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as albumsActions from '../actions/albums';


function AlbumsContainer(ChildComponent) {
  class AlbumsComponent extends Component {
    componentDidMount() {
      this.props.albumsActions.fetchAlbums();
    }

    render() {
      return (<ChildComponent {...this.props} />);
    }
  }

  AlbumsComponent.propTypes = {
    albumsActions: PropTypes.object,
  };

  const mapStateToProps = ({ albums }) => ({
    albumsState: albums,
  });

  const mapActionsToProps = (dispatch) => ({
    albumsActions: bindActionCreators(albumsActions, dispatch),
  });


  return connect(mapStateToProps, mapActionsToProps)(AlbumsComponent);
}


export default AlbumsContainer;

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ArtistsActions from '../actions/artists';

import Header from '../components/Header';
import ArtistList from '../components/ArtistList';


class ArtistListView extends Component {
  componentWillMount() {
    this.props.actions.fetchArtists();
  }

  render() {
    const { artists } = this.props;

    return (
      <main className="Content">
      <Header text="Artists" />
      <ArtistList artists={artists} />
      </main>
    );
  }
}

ArtistListView.propTypes = {
  artists: PropTypes.array,
  actions: PropTypes.object,
};


const mapStateToProps = (state) => ({
  artists: state.artists,
});

const mapActionsToProps = (dispatch) => ({
  actions: bindActionCreators(ArtistsActions, dispatch),
});


export default connect(mapStateToProps, mapActionsToProps)(ArtistListView);

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as applicationActions from '../actions/application';


function ApplicationContainer(Component) {
  const ApplicationComponent = ({ state, actions }) => (
    <Component
      applicationState={state}
      applicationActions={actions}
    />
  );

  ApplicationComponent.propTypes = {
    state: PropTypes.object,
    actions: PropTypes.object,
  };

  const mapStateToProps = ({ application }) => ({
    state: application,
  });

  const mapActionsToProps = (dispatch) => ({
    actions: bindActionCreators(applicationActions, dispatch),
  });


  return connect(mapStateToProps, mapActionsToProps)(ApplicationComponent);
}


export default ApplicationContainer;

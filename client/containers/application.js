import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as applicationActions from '../actions/application';


function ApplicationContainer(Component) {
  const ApplicationComponent = (props) => (
    <Component {...props} />
  );

  ApplicationComponent.propTypes = {
    state: PropTypes.object,
    actions: PropTypes.object,
  };

  const mapStateToProps = ({ application }) => ({
    applicationState: application,
  });

  const mapActionsToProps = (dispatch) => ({
    applicationActions: bindActionCreators(applicationActions, dispatch),
  });


  return connect(mapStateToProps, mapActionsToProps)(ApplicationComponent);
}


export default ApplicationContainer;

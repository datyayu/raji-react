import thunkMiddleware from 'redux-thunk';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';

import artists from '../reducers/artists';
import application from '../reducers/application';


const customCreateStore = compose(
  applyMiddleware(thunkMiddleware)
)(createStore);


const reducers = combineReducers({
  application,
  artists,
});


export default customCreateStore(reducers);

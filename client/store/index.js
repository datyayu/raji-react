import thunkMiddleware from 'redux-thunk';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';

import artists from '../reducers/artists';
import albums from '../reducers/albums';
import application from '../reducers/application';


const customCreateStore = compose(
  applyMiddleware(thunkMiddleware)
)(createStore);


const reducers = combineReducers({
  application,
  artists,
  albums,
});


export default customCreateStore(reducers);

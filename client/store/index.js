import thunkMiddleware from 'redux-thunk';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';

import artists from '../reducers/artists';


const customCreateStore = compose(
  applyMiddleware(thunkMiddleware)
)(createStore);


const reducers = combineReducers({
  artists,
});


export default customCreateStore(reducers);

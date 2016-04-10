import {
  ALBUMS__FETCH_LIST,
  ALBUMS__UPDATE_LIST,
} from '../constants/actionTypes';


const initialState = {
  albums: [],
};


export default function applicationReducer(state = initialState, action) {
  switch (action.type) {
    case ALBUMS__FETCH_LIST:
      return { ...state, albums: [] };

    case ALBUMS__UPDATE_LIST:
      return { ...state, albums: action.albums };

    default:
      return state;
  }
}

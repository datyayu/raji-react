import {
  ALBUMS__FETCH_LIST,
  ALBUMS__UPDATE_LIST,
  ALBUMS__FETCH_ALBUM,
  ALBUMS__SET_SHOWING_ALBUM,
} from '../constants/actionTypes';


const initialState = {
  albums: [],
  showingAlbum: {},
};


export default function applicationReducer(state = initialState, action) {
  switch (action.type) {
    case ALBUMS__FETCH_LIST:
      return { ...state, albums: [] };

    case ALBUMS__UPDATE_LIST:
      return { ...state, albums: action.albums };

    case ALBUMS__FETCH_ALBUM:
      return { ...state, showingAlbum: {} };

    case ALBUMS__SET_SHOWING_ALBUM:
      return { ...state, showingAlbum: action.album };

    default:
      return state;
  }
}

import {
  ARTISTS__FETCH_LIST,
  ARTISTS__LIST_FETCH_FAILED,
  ARTISTS__UPDATE_LIST,
  ARTISTS__FETCH_ARTIST,
  ARTISTS__SET_SHOWING_ARTIST,
  ARTISTS__ARTIST_FETCH_FAILED,
} from '../constants/actionTypes';


const initialState = {
  artists: [],
  showingArtist: {},
};


export default function artistsReducer(state = initialState, action) {
  switch (action.type) {
    case ARTISTS__FETCH_LIST:
      return { ...state, artists: [] };

    case ARTISTS__LIST_FETCH_FAILED:
      return { ...state, artists: [] };

    case ARTISTS__UPDATE_LIST:
      return { ...state, artists: action.artists };

    case ARTISTS__FETCH_ARTIST:
      return { ...state, showingArtist: {} };

    case ARTISTS__ARTIST_FETCH_FAILED:
      return { ...state, showingArtist: {} };

    case ARTISTS__SET_SHOWING_ARTIST:
      return { ...state, showingArtist: action.artist };

    default:
      return state;
  }
}

import {
  ARTIST_LIST__FETCH,
  ARTIST_LIST__FETCH_FAILED,
  ARTIST_LIST__FETCH_SUCESSFUL,
} from '../constants/actionTypes';


const initialState = {
  artists: [],
};


export default function artistsReducer(state = initialState, action) {
  switch (action.type) {
    case ARTIST_LIST__FETCH:
      return { ...state, artists: [] };

    case ARTIST_LIST__FETCH_FAILED:
      return { ...state, artists: [] };

    case ARTIST_LIST__FETCH_SUCESSFUL:
      return { ...state, artists: action.artists };

    default:
      return state;
  }
}

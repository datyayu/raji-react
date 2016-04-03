import {
  ARTIST_LIST__FETCH,
  ARTIST_LIST__FETCH_FAILED,
  ARTIST_LIST__FETCH_SUCESSFUL,
} from '../config/actionTypes';


export default function artistsReducer(state = [], action) {
  switch (action.type) {
    case ARTIST_LIST__FETCH:
      return [];

    case ARTIST_LIST__FETCH_FAILED:
      return [];

    case ARTIST_LIST__FETCH_SUCESSFUL:
      return action.artists;

    default:
      return state;
  }
}

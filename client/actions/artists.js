import {
  ARTISTS__FETCH_LIST,
  ARTISTS__LIST_FETCH_FAILED,
  ARTISTS__UPDATE_LIST,
  ARTISTS__FETCH_ARTIST,
  ARTISTS__SET_SHOWING_ARTIST,
  ARTISTS__ARTIST_FETCH_FAILED,
} from '../constants/actionTypes';


const artistsFetchAction = () => ({
  type: ARTISTS__FETCH_LIST,
});

const artistsListFetchFailedAction = (error) => ({
  type: ARTISTS__LIST_FETCH_FAILED,
  error,
});

const artistsUpdateListAction = (artistsList) => ({
  type: ARTISTS__UPDATE_LIST,
  artists: artistsList,
});

const fetchArtistAction = () => ({
  type: ARTISTS__FETCH_ARTIST,
});

const artistUpdateAction = (artist) => ({
  type: ARTISTS__SET_SHOWING_ARTIST,
  artist,
});

const artistFetchFailedAction = (error) => ({
  type: ARTISTS__ARTIST_FETCH_FAILED,
  error,
});


export function fetchArtists() {
  return dispatch => {
    dispatch(artistsFetchAction());

    fetch('/api/artists')
      .then(response => response.json())
      .then(response => {
        dispatch(artistsUpdateListAction(response.artists));
      })
      .catch(error => dispatch(artistsListFetchFailedAction(error)))
    ;
  };
}

export function fetchArtist(id) {
  return dispatch => {
    dispatch(fetchArtistAction());

    fetch(`/api/artists/${id}`)
      .then(response => response.json())
      .then(response => {
        dispatch(artistUpdateAction(response.artist));
      })
      .catch(error => dispatch(artistFetchFailedAction(error)))
    ;
  };
}

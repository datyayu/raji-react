import {
  ARTIST_LIST__FETCH,
  ARTIST_LIST__FETCH_FAILED,
  ARTIST_LIST__FETCH_SUCESSFUL,
} from '../config/actionTypes';


const artistsFetchAction = () => ({
  type: ARTIST_LIST__FETCH,
});

const artistsFetchFailedAction = (error) => ({
  type: ARTIST_LIST__FETCH_FAILED,
  error,
});

const artistsFetchSuccesfullAction = (artistsList) => ({
  type: ARTIST_LIST__FETCH_SUCESSFUL,
  artists: artistsList,
});


export function fetchArtists() {
  return dispatch => {
    dispatch(artistsFetchAction());

    fetch('/api/artists')
      .then(response => response.json())
      .then(response => {
        dispatch(artistsFetchSuccesfullAction(response.artists));
      })
      .catch(error => dispatch(artistsFetchFailedAction(error)))
    ;
  };
}

import {
  ALBUMS__FETCH_LIST,
  ALBUMS__UPDATE_LIST,
  ALBUMS__FETCH_FAILED,
} from '../constants/actionTypes';


const albumsFetchAction = () => ({
  type: ALBUMS__FETCH_LIST,
});

const updateAlbumListAction = (albums = []) => ({
  type: ALBUMS__UPDATE_LIST,
  albums,
});

const albumsFetchFailedAction = (error) => ({
  type: ALBUMS__FETCH_FAILED,
  error,
});


export function fetchAlbums() {
  return dispatch => {
    dispatch(albumsFetchAction());

    fetch('/api/albums')
      .then(response => response.json())
      .then(response => {
        dispatch(updateAlbumListAction(response.albums));
      })
      .catch(error => dispatch(albumsFetchFailedAction(error)))
    ;
  };
}

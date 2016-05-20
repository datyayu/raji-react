import {
  ALBUMS__FETCH_LIST,
  ALBUMS__UPDATE_LIST,
  ALBUMS__LIST_FETCH_FAILED,
  ALBUMS__FETCH_ALBUM,
  ALBUMS__SET_SHOWING_ALBUM,
  ALBUMS__ALBUM_FETCH_FAILED,
} from '../constants/actionTypes';


const fetchAlbumsListAction = () => ({
  type: ALBUMS__FETCH_LIST,
});

const updateAlbumListAction = (albums = []) => ({
  type: ALBUMS__UPDATE_LIST,
  albums,
});

const albumsListFetchFailedAction = (error) => ({
  type: ALBUMS__LIST_FETCH_FAILED,
  error,
});

const fetchAlbumAction = () => ({
  type: ALBUMS__FETCH_ALBUM,
});

const setShowingAlbumAction = (album) => ({
  type: ALBUMS__SET_SHOWING_ALBUM,
  album,
});

const albumFetchFailedAction = (error) => ({
  type: ALBUMS__ALBUM_FETCH_FAILED,
  error,
});


export function fetchAlbumsList() {
  return dispatch => {
    dispatch(fetchAlbumsListAction());

    fetch('/api/albums')
      .then(response => response.json())
      .then(response => {
        dispatch(updateAlbumListAction(response.albums));
      })
      .catch(error => dispatch(albumsListFetchFailedAction(error)))
    ;
  };
}

export function fetchAlbum(id) {
  return dispatch => {
    dispatch(fetchAlbumAction());

    fetch(`/api/albums/${id}`)
      .then(response => response.json())
      .then(response => {
        dispatch(setShowingAlbumAction(response.album));
      })
      .catch(error => dispatch(albumFetchFailedAction(error)))
    ;
  };
}

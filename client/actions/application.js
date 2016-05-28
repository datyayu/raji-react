import {
  APPLICATION__TOGGLE_SIDEMENU,
  APPLICATION__TOGGLE_PLAYLIST,
  APPLICATION__CLOSE_SIDELISTS,
} from '../constants/actionTypes';


const toggleSidemenuAction = () => ({
  type: APPLICATION__TOGGLE_SIDEMENU,
});

const togglePlaylistAction = () => ({
  type: APPLICATION__TOGGLE_PLAYLIST,
});

const closeSidelistsAction = () => ({
  type: APPLICATION__CLOSE_SIDELISTS,
});

export function toggleSidemenu() {
  return dispatch => dispatch(toggleSidemenuAction());
}


export function togglePlaylist() {
  return dispatch => dispatch(togglePlaylistAction());
}


export function closeSidelists() {
  return dispatch => dispatch(closeSidelistsAction());
}

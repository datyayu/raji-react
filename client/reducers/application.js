import {
  APPLICATION__TOGGLE_SIDEMENU,
  APPLICATION__TOGGLE_PLAYLIST,
  APPLICATION__CLOSE_SIDELISTS,
  ROUTER__LOCATION_CHANGE,
} from '../constants/actionTypes';


const initialState = {
  showSidemenu: false,
  showPlaylist: false,
};

export default function applicationReducer(state = initialState, action) {
  console.log(action, state);

  switch (action.type) {
    case APPLICATION__TOGGLE_SIDEMENU:
      return {
        ...state,
        showSidemenu: !state.showSidemenu,
      };

    case APPLICATION__TOGGLE_PLAYLIST:
      return {
        ...state,
        showPlaylist: !state.showPlaylist,
      };

    case APPLICATION__CLOSE_SIDELISTS:
    case ROUTER__LOCATION_CHANGE:
      return {
        ...state,
        showSidemenu: false,
        showPlaylist: false,
      };

    default:
      return state;
  }
}

import {
  APPLICATION__TOGGLE_SIDEMENU,
  ROUTER__LOCATION_CHANGE,
} from '../constants/actionTypes';


const initialState = {
  showSidemenu: false,
};

export default function applicationReducer(state = initialState, action) {
  switch (action.type) {
    case APPLICATION__TOGGLE_SIDEMENU:
      return {
        ...state,
        showSidemenu: !state.showSidemenu,
      };

    case ROUTER__LOCATION_CHANGE:
      return {
        ...state,
        showSidemenu: false,
      };

    default:
      return state;
  }
}

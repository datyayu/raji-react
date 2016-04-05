import {
  APPLICATION__TOGGLE_SIDEMENU,
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

    default:
      return state;
  }
}

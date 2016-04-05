import {
  APPLICATION__TOGGLE_SIDEMENU,
} from '../constants/actionTypes';


const toggleSidemenuAction = () => ({
  type: APPLICATION__TOGGLE_SIDEMENU,
});


export function toggleSidemenu() {
  return dispatch => dispatch(toggleSidemenuAction());
}

import { TOGGLE_PROFILE_MODAL } from "../actions/actionTypes";
const initialState = {
  isProfileModalOpen: false,
};
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PROFILE_MODAL:
      return {
        ...state,
        isProfileModalOpen: action.payLoad
      };
    default:
      return state;
  }
};

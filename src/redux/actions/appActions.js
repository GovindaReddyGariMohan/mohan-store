import { TOGGLE_PROFILE_MODAL } from "./actionTypes";
export const toggleProfileModal = (payLoad = false) => {
  return {
    type: TOGGLE_PROFILE_MODAL,
    payLoad,
  };
};


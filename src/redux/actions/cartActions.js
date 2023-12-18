import { ADD_ITEM, DELETE_ITEM } from "./actionTypes";
const addItem = (payLoad, pushCurrent) => {
  return {
    type: ADD_ITEM,
    payLoad,
    pushCurrent
  };
};
const deleteItem = (payLoad) => {
  return {
    type: DELETE_ITEM,
    payLoad,
  };
};

export { addItem, deleteItem };
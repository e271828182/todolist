import * as type from './actionTypes';

export const getInputChangeAction = (value) => ({
  type: type.CHANGE_INPUT_VALUE,
  value
});

export const addItemAction = () => ({
  type: type.ADD_ITEM
});

export const deleteItemAction = (index)=>({
  type: type.DELETE_ITEM,
  index
})

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
});

export const handleStoreChange = (self,store)=>self.setState(store.getState());

export const initListAction = (data) => ({
  type: type.GET_INIT_LIST,
  data
});

export const initListActionSuccess = (data) => ({
  type: type.GET_INIT_LIST_SUCCESS,
  data
});

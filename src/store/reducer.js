import * as type from './actionTypes';

const defaultState = {
  inputValue: 'aaa',
  list: [1,2,3]
}

export default (state=defaultState, action) => {
  if(action.type === type.CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if(action.type === type.ADD_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }

  if(action.type === type.DELETE_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
}

import { put, takeEvery } from 'redux-saga/effects';
import * as type from './actionTypes';
import axios from 'axios';
import * as actionCreate from './actionCreates';

function* getInitList(){
  try{
    const res = yield axios.get('/api/todolist');
    const action = actionCreate.initListAction(res.data);
    yield put(action);
  }catch(e){
    console.log('list 请求失败');
  }
}

function* mySaga() {
  yield takeEvery(type.GET_INIT_LIST, getInitList);
}

export default mySaga;

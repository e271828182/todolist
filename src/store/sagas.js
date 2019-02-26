import { put, takeEvery } from 'redux-saga/effects';
import * as type from './actionTypes';
import axios from 'axios';
import * as actionCreate from './actionCreates';

function* getInitList(){
  try{
    const res = yield axios.get('/api/todolist');
    const action = actionCreate.initListActionSuccess(res.data);
    yield put(action);
  }catch(e){
    console.log(e);
    console.log('list 请求失败');
    const action = actionCreate.initListActionSuccess(['a1','b2']);
    yield put(action);
  }
}


export default function* mySaga() {
  yield takeEvery(type.GET_INIT_LIST, getInitList);
};

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as actionType from './actionTypes'
import * as actionCreator from './actions'
import axios from 'axios'

function* getInitList() {
  try {
    const res = yield axios.get('/list/get')
    console.log("getInitList:", res)
    yield put(actionCreator.initListAction(res.data.list))
  } catch(e) {
    console.log("getInitList:", e)
    yield put(actionCreator.initListAction(['saga err1', 'saga err2']))
  }
}

function* todoSaga() {
  yield takeEvery(actionType.GET_INIT_LIST, getInitList);
}

export default todoSaga;
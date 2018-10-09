import { takeEvery, put } from 'redux-saga/effects'

function * editEventWorker (action) {
  yield put({
    type: 'REMOVE_EVENT_REQUEST',
    payload: action.payload.id
  })
  yield put({ type: 'ADD_EVENT_REQUEST', payload: action.payload })
}

function * editEventSaga () {
  yield takeEvery('EDIT_EVENT_REQUEST', editEventWorker)
}

export default editEventSaga

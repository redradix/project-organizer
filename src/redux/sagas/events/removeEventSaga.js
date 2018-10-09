import { takeEvery, call, put } from 'redux-saga/effects'
import { removeEventFromDB } from '../../../api'

function * removeEventWorker (action) {
  try {
    yield call(removeEventFromDB, action.payload)
    yield put({ type: 'GET_EVENTS_REQUEST' })
  } catch (err) {
    console.error(err)
  }
}

function * removeEventSaga () {
  yield takeEvery('REMOVE_EVENT_REQUEST', removeEventWorker)
}

export default removeEventSaga

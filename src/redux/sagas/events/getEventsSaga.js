import { takeEvery, put, call } from 'redux-saga/effects'
import { getFromAPI } from '../../../api'

function * fetchEvents () {
  const response = yield call(getFromAPI, 'events')
  const events = response.data

  yield put({ type: 'INIT_EVENTS', events })
}

function * getEventsSaga () {
  yield takeEvery('GET_EVENTS_REQUEST', fetchEvents)
}

export default getEventsSaga

import { put, call, all, takeLatest } from 'redux-saga/effects'
import { getFromAPI, createEvent, removeEventFromDB } from '../api'
import { formatEvent } from './utils'
import {
  ADD_ASSIGNMENT_REQUEST,
  EDIT_ASSIGNMENT_REQUEST,
  GET_ASSIGNMENTS_REQUEST,
  REMOVE_ASSIGNMENT_REQUEST
} from './action-types'

function * addEventWorker (action) {
  try {
    const formatedEvent = yield call(formatEvent, action.payload)
    const response = yield call(createEvent, formatedEvent)

    yield put({ type: 'ADD_ASSIGNMENT', event: response.data })
  } catch (err) {
    console.log(err)
  }
}

function * editEventWorker (action) {
  yield put({
    type: REMOVE_ASSIGNMENT_REQUEST,
    payload: action.payload.id
  })
  yield put({ type: ADD_ASSIGNMENT_REQUEST, payload: action.payload })
}

function * fetchEvents () {
  const response = yield call(getFromAPI, 'events')
  const events = response.data

  yield put({ type: 'INIT_ASSIGNMENTS', events })
}

function * removeEventWorker (action) {
  try {
    yield call(removeEventFromDB, action.payload)
    yield put({ type: GET_ASSIGNMENTS_REQUEST })
  } catch (err) {
    console.error(err)
  }
}

export default function * () {
  yield all([
    takeLatest(ADD_ASSIGNMENT_REQUEST, addEventWorker),
    takeLatest(EDIT_ASSIGNMENT_REQUEST, editEventWorker),
    takeLatest(GET_ASSIGNMENTS_REQUEST, fetchEvents),
    takeLatest(REMOVE_ASSIGNMENT_REQUEST, removeEventWorker)
  ])
}

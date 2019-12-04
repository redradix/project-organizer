import { put, call, all, takeLatest } from 'redux-saga/effects'
import APIAssignments from './api'
import {
  ADD_ASSIGNMENT_REQUEST,
  EDIT_ASSIGNMENT_REQUEST,
  GET_ASSIGNMENTS_REQUEST,
  REMOVE_ASSIGNMENT_REQUEST,
} from './action-types'

function* addEventWorker(history, action) {
  try {
    yield call(APIAssignments.create, action.payload)
    history.push('/')
  } catch (err) {
    console.log(err)
  }
}

function* editEventWorker(action) {
  yield put({
    type: REMOVE_ASSIGNMENT_REQUEST,
    payload: action.payload.id,
  })
  yield put({ type: ADD_ASSIGNMENT_REQUEST, payload: action.payload })
}

function* fetchEvents() {
  yield call(APIAssignments.fetchAll)
}

function* removeEventWorker(history, action) {
  try {
    yield call(APIAssignments.remove, action.payload)
    history.push('/')
  } catch (err) {
    console.error(err)
  }
}

export default function*(history) {
  yield all([
    takeLatest(ADD_ASSIGNMENT_REQUEST, addEventWorker, history),
    takeLatest(EDIT_ASSIGNMENT_REQUEST, editEventWorker, history),
    takeLatest(GET_ASSIGNMENTS_REQUEST, fetchEvents),
    takeLatest(REMOVE_ASSIGNMENT_REQUEST, removeEventWorker, history),
  ])
}

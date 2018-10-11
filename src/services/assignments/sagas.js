import { put, call, all, takeLatest } from 'redux-saga/effects'
import APIAssignments from './api'
import {
  ADD_ASSIGNMENT_REQUEST,
  EDIT_ASSIGNMENT_REQUEST,
  GET_ASSIGNMENTS_REQUEST,
  REMOVE_ASSIGNMENT_REQUEST
} from './action-types'

function * addEventWorker (action) {
  try {
    yield call(APIAssignments.create, action.payload)
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
  yield call(APIAssignments.fetchAll)
}

function * removeEventWorker (action) {
  try {
    yield call(APIAssignments.remove, action.payload)
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

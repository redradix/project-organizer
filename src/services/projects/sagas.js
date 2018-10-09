import { takeLatest, call, put, all } from 'redux-saga/effects'
import { getFromAPI, createProject, removeProjectFromDB } from '../../../api'
import {
  ADD_PROJECT_REQUEST,
  GET_PROJECT_REQUEST,
  REMOVE_PROJECT_REQUEST
} from './action-types'

function * addProjectWorker (action) {
  try {
    yield call(createProject, action.payload)
    yield put({ type: 'ADD_PROJECT', event: action.payload })
  } catch (err) {
    console.error(err)
  }
}

function * getProjectsWorker () {
  const response = yield call(getFromAPI, 'projects')
  const projects = response.data

  yield put({ type: 'INIT_PROJECTS', projects })
}

function * removeProjectWorker (action) {
  yield call(removeProjectFromDB, action.payload)
  yield put({ type: GET_PROJECT_REQUEST })
}

export default function * () {
  yield all([
    takeLatest(ADD_PROJECT_REQUEST, addProjectWorker),
    takeLatest(GET_PROJECT_REQUEST, getProjectsWorker),
    takeLatest(REMOVE_PROJECT_REQUEST, removeProjectWorker)
  ])
}

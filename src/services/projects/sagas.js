import { takeLatest, call, all } from 'redux-saga/effects'
import APIProjects from './api'
import {
  ADD_PROJECT_REQUEST,
  GET_PROJECT_REQUEST,
  REMOVE_PROJECT_REQUEST
} from './action-types'

function * addProjectWorker (action) {
  try {
    yield call(APIProjects.create, action.payload)
  } catch (err) {
    console.error(err)
  }
}

function * getProjectsWorker () {
  yield call(APIProjects.fetchAll)
}

function * removeProjectWorker (history, action) {
  yield call(APIProjects.remove, action.payload)
  history.push('/')
}

export default function * (history) {
  yield all([
    takeLatest(ADD_PROJECT_REQUEST, addProjectWorker, history),
    takeLatest(GET_PROJECT_REQUEST, getProjectsWorker),
    takeLatest(REMOVE_PROJECT_REQUEST, removeProjectWorker, history)
  ])
}

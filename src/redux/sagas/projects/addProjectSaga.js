import { takeEvery, call, put } from 'redux-saga/effects'
import { createProject } from '../../../api'

function * addProjectWorker (action) {
  try {
    yield call(createProject, action.payload)
    yield put({ type: 'ADD_PROJECT', event: action.payload })
  } catch (err) {
    console.error(err)
  }
}

function * addProjectSaga () {
  yield takeEvery('ADD_PROJECT_REQUEST', addProjectWorker)
}

export default addProjectSaga

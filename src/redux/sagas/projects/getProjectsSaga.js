import { takeEvery, call, put } from 'redux-saga/effects'
import { getFromAPI } from '../../../api'

function * getProjectsWorker () {
  const response = yield call(getFromAPI, 'projects')
  const projects = response.data

  yield put({ type: 'INIT_PROJECTS', projects })
}

function * getProjectsSaga () {
  yield takeEvery('GET_PROJECTS_REQUEST', getProjectsWorker)
}

export default getProjectsSaga

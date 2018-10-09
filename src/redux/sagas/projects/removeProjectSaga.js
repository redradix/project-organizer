import { takeEvery, call, put } from 'redux-saga/effects'
import { removeProjectFromDB } from '../../../api'

function * removeProjectWorker (action) {
  yield call(removeProjectFromDB, action.payload)
  yield put({ type: 'GET_PROJECTS_REQUEST' })
}

function * removeProjectSaga () {
  yield takeEvery('REMOVE_PROJECT_REQUEST', removeProjectWorker)
}

export default removeProjectSaga

import addEventSaga from './events/addEventSaga'
import getEventsSaga from './events/getEventsSaga'
import removeEventSaga from './events/removeEventSaga'
import editEventSaga from './events/editEventSaga'
import addProjectSaga from './projects/addProjectSaga'
import getProjectsSaga from './projects/getProjectsSaga'
import removeProjectSaga from './projects/removeProjectSaga'

export default function * rootSaga () {
  yield [
    addEventSaga(),
    getEventsSaga(),
    removeEventSaga(),
    editEventSaga(),
    addProjectSaga(),
    getProjectsSaga(),
    removeProjectSaga()
  ]
}

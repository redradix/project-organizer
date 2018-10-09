import createSagaMiddleware from 'redux-saga'
import { all, spawn, call } from 'redux-saga/effects'
import assignmentSagas from '../services/assignments/sagas'
import projectSagas from '../services/projects/sagas'

const sagaMiddleware = createSagaMiddleware()

const sagas = [assignmentSagas, projectSagas]

// Build a root saga passing the history to each
function * rootSaga (history) {
  yield all(
    sagas.map(saga =>
      spawn(function * () {
        yield initSaga(saga, history)
      })
    )
  )
}

// Init the saga with history
function * initSaga (saga, history) {
  while (true) {
    try {
      yield call(saga, history)
      break
    } catch (err) {
      console.error(err)
    }
  }
}

// Export the sagaMiddleware and a function to start it
export default {
  middleware: sagaMiddleware,
  start: history => sagaMiddleware.run(rootSaga, history)
}

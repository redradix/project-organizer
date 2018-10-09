import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { batchReducer } from 'reduken'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const initReduxDevTools = () => {
  if (process.env.NODE_ENV !== 'production') {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      return devToolsExtension()
    }
  }
}

export default function createCustomStore (initialState = {}, history) {
  const middlewares = [rootSaga.middleware]
  const enhancers = []

  const reduxDevTools = initReduxDevTools()

  const store = createStore(
    batchReducer(combineReducers(rootReducer)),
    initialState,
    compose(
      applyMiddleware(...middlewares),
      reduxDevTools,
      ...enhancers
    )
  )

  rootSaga.start(history)

  return store
}

import React from 'react'
import { createBrowserHistory } from 'history'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routes from './Routes'
import createCustomStore from '../redux/customStore'

const history = createBrowserHistory()
export const store = createCustomStore({}, history)

const App = props => (
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>
)

export default App

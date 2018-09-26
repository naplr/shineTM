import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
//import registerServiceWorker from './registerServiceWorker'

import reducers from './reducers'
import Routes from './routes'
import { HomeView } from './views'

const history = createHistory()
const middlewares = [
  routerMiddleware(history)
]

const finalCreateStore = compose(
  applyMiddleware(...middlewares),
)(createStore)

const store = finalCreateStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root')
)

//registerServiceWorker()

import React from 'react'
import { Route as OrigRoute, Switch } from 'react-router-dom'

import { App } from './layouts'
import { HomeView, TestView } from './views'

const authenticated = (props, component) => {
  return component
}

const Route = ({ path, component }) => (
  <OrigRoute 
    exact 
    path={path}
    render={props => authenticated(props, component)}
  />
)

const Routes = props => {
  return <div>
    <App>
      <Switch>
        <Route path="/test" component={<TestView />} />
        <Route path="/" component={<HomeView />} />
      </Switch>
    </App>
  </div>
}

export default Routes

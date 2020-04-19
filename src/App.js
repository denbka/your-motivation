import React from 'react'
import './assets/sass/index.scss'
import PageTime from './views/PageTime'
import PageFinances from './views/PageFinances'
import { Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <PageTime></PageTime>
        </Route>
        <Route path="/finances">
          <PageFinances></PageFinances>
        </Route>
      </Switch>
    </div>
  )
}

export default App

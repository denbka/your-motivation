import React from 'react'
import './assets/scss/index.scss'
import routes, { RenderRoutes } from './routes'
function App() {
  return (
    <div className="container">
      <RenderRoutes routes={routes} />
    </div>
  )
}

export default App

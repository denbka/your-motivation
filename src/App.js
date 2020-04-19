import React from 'react'
import './assets/sass/index.scss'
import routes, { RenderRoutes } from './routes'
function App() {
  return (
    <div className="App">
      <RenderRoutes routes={routes} />
    </div>
  )
}

export default App

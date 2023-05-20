import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import SingleMovie from './SingleMovie'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/movies/:id' component={SingleMovie} />
    </Switch>
  )
}

export default App

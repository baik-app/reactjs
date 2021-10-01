import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Intro from './pages/Intro'
import Opsi from './pages/Opsi'

function App() {
  return (
      <Router>
      <Switch>
        <Route exact path='/'>
          <Intro />
        </Route>
        <Route path='/opsi'>
          <Opsi />
        </Route>
      </Switch>
      </Router>
  )
}

export default App

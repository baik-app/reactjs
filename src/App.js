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
import NomorDarurat from './pages/NoDarurat'

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
        <Route path='/noDarurat'>
          <NomorDarurat />
        </Route>
      </Switch>
      </Router>
  )
}

export default App

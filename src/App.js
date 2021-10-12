import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Opsi from "./pages/Opsi";
import NomorDarurat from "./pages/NoDarurat";
import NomorDarurat2 from "./pages/NoDarurat2";
import HomePelaporan from "./pages/HomePelaporan";
import HomeAspirasi from "./pages/HomeAspirasi";
import Login from "./pages/Login";
import SilahkanLogin from "./pages/SilahkanLogin";
import HomeAktivitas from "./pages/HomeAktivitas";
import FormAspirasi from './pages/FormAspirasi'
import FormPelaporan from './pages/FormPelaporan'
import Register from "./pages/Register"
import AspirasiTerkirim from './pages/AspirasiTerkirim'
import PelaporanTerkirim from './pages/PelaporanTerkirim'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Intro />
        </Route>
        <Route path="/intro">
          <Intro />
        </Route>
        <Route path="/opsi">
          <Opsi />
        </Route>
        <Route path="/backHome">
          <HomePelaporan />
        </Route>
        <Route path="/noDarurat">
          <NomorDarurat />
        </Route>
        <Route path="/noDarurat2">
          <NomorDarurat2 />
        </Route>
        <Route path="/Pelaporan">
          <HomePelaporan />
        </Route>
        <Route path="/Aspirasi">
          <HomeAspirasi />
        </Route>
        <Route path="/SilahkanLogin">
          <SilahkanLogin />
        </Route>
        <Route path="/Aktivitas">
          <HomeAktivitas />
        </Route>
        <Route path='/FormulirAspirasi'>
          <FormAspirasi />
        </Route>
        <Route path='/FormulirPelaporan'>
          <FormPelaporan />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/AspirasiTerkirim">
          <AspirasiTerkirim />
        </Route>
        <Route path="/PelaporanTerkirim">
          <PelaporanTerkirim />
        </Route>
      </Switch>
    </Router>
  )
}
export default App;

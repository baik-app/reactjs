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
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
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
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;

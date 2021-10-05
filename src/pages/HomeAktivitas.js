import React from "react";
import Nav from "./Components/Nav-Home/NavHome2";
import Box from "./Components/Aktivi/BoxAktivi";

function HomeAktivitas() {
  return (
    <div className="container-home">
      {/* <img class="profil" src="./assets/profil.svg" alt=""> */}
      <div className="garis"></div>
      <h1>Aktivitas</h1>
      <Box />
      <div className="box-opsi"></div>
      <Nav />
    </div>
  );
}
export default HomeAktivitas;

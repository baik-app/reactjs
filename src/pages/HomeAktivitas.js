import React from "react";
import Nav from "./Components/Nav-Home/NavHome2";
import Box from "./Components/Aktivi/BoxAktivi";
import Avatar from './Assets/Avatar.jpg'
import Profil from './Components/Profile/Profil'
import {useState} from 'react'

function HomeAktivitas() {
  const [profil, setprofil] = useState()
  return (
    <div className="container-home">
      <img className='avatar' src={Avatar} alt='profil' onClick={()=>setprofil(<Profil />)} />
      {/* <img class="profil" src="./assets/profil.svg" alt=""> */}
      <div className="garis"></div>
      <h1>Aktivitas</h1>
      {profil}
      <Box />
      <div className="box-opsi"></div>
      <Nav />
    </div>
  );
}

export default HomeAktivitas;

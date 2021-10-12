import React from "react";
import Nav from "./Components/Nav-Home/NavHome2";
import Box from "./Components/Aktivi/BoxAktivi";
import Avatar from './Assets/Avatar.jpg'
import Profil from './Components/Profile/Profil'
import {useState} from 'react'

function HomeAktivitas() {
  const [profil, setprofil] = useState()
  function onClickHandler (isShow) {
    if (isShow == true){
      setprofil(<Profil handler={onClickHandler}/>)
    } 
    else {
      setprofil()
    }
  }
  return (
    <div className="container-home">
      <img className='avatar' src={Avatar} alt='profil' onClick={()=>onClickHandler(true)} />
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

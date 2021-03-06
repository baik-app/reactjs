import React from "react";
import Nav from "./Components/Nav-Home/NavHome";
import Lapor from "./Components/Opsi-Lapor/Pelaporan";
import AspirasiOff from "./Components/Opsi-Lapor/AspirasiOff";
import BuatLaporan from "./Assets/buat-laporan.svg";
import { Link } from "react-router-dom";
import Avatar from './Assets/Avatar.jpg'
import Profil from './Components/Profile/Profil'
import {useState} from 'react'

function Home() {
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
      <h1>Lapor</h1>
      {profil}
      <div className="garis"></div>
      <Lapor />
      <AspirasiOff />
      <div className="deskripsi">
        <p>
          Anda dapat melaporkan permasalahan-permasalahan yang terjadi terhadap
          anda, orang lain, dan lingkungan sekitar anda. Laporan anda akan
          segera ditindak lanjuti dan terjamin aman.
        </p>
        <Link to='/FormulirPelaporan'>
          <div className="buat">
            <img src={BuatLaporan} alt="buat-laporan" />
          </div>
        </Link>
      </div>
      <Nav />
    </div>
  );
}
export default Home;

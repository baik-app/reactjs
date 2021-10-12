import React from "react";
import Nav from "./Components/Nav-Home/NavHome";
import LaporOff from "./Components/Opsi-Lapor/PelaporanOff";
import Aspirasi from "./Components/Opsi-Lapor/Aspirasi";
import BuatAspirasi from "./Assets/buat-aspirasi.svg";
import { Link } from "react-router-dom";
import Avatar from './Assets/Avatar.jpg'
import Profil from './Components/Profile/Profil'
import {useState} from 'react'

function HomeAspirasi() {
  const [profil, setprofil] = useState()
  return (
    <div className="container-home">
      <img className='avatar' src={Avatar} alt='profil' onClick={()=>setprofil(<Profil />)} />
      <h1>Lapor</h1>
      {profil}
      <img className="profil" src="" alt="" />
      <div className="garis"></div>
      <LaporOff />
      <Aspirasi />
      <div className="deskripsi">
        <p>
          Anda dapat menyampaikan opini usulan, dan harapan anda terhadap suatu
          persoalan. Identitas anda pun akan terjamin aman dan terlindungi.
        </p>

        <Link to='/FormulirAspirasi'>
          <div className="buat">
            <img src={BuatAspirasi} alt="buat-aspirasi" />
          </div>
        </Link>
      </div>
      <Nav />
    </div>
  );
}

export default HomeAspirasi;

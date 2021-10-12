import React from 'react'
import Terkirim from './Assets/terkirim.svg'
import Close from "./Assets/close.svg";
import { Link } from 'react-router-dom';

function PelaporanTerkirim() {
    return (
        <div className='container'>
            <Link to="/Pelaporan">
               <img className="close" src={Close} alt="close" />
            </Link>
            <img className='terkirim' src={Terkirim} alt='Pelaporan Terkirim' />
        </div>
    )
}

export default PelaporanTerkirim
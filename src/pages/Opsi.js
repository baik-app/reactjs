import React from 'react'
import './style.css'
import ilustrasi from './Assets/ilustrasi.svg'
import {Link} from 'react-router-dom'


function Coba() {
    return (
        <div className="container">
            <div className="shape"></div>
              <h1>Baik App</h1>
            <div className="ilustration">
               <img src={ilustrasi} alt="ilustration" />
            </div>
            <div className="question"><p>APA YANG KAMU BUTUHKAN?</p></div>
            <div>
                <Link to='/noDarurat'>
                <button id="button-opsi1" type="button" ><p>Menghubungi Nomor Darurat</p></button>
                </Link>
                <Link to='/Pelaporan'>
                <button id="button-opsi2" type="button"><p>Pelaporan / Aspirasi</p></button>
                </Link>
            </div>
        </div>
    )
}

export default Coba

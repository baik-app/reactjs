import React from 'react'
import './intro-opsi.css'
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
                <a href="layanan-telephone.html">
                    <button id="button-opsi1" type="button" ><p>Menghubungi Nomor Darurat</p></button>
                </a>
                <a href="home-pelaporan.html">
                    <button id="button-opsi2" type="button"><p>Pelaporan / Aspirasi</p></button>
                </a>
            </div>
        </div>
    )
}

export default Coba

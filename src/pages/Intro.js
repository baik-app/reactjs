import React from 'react'
import './style.css'
import ilustrasi from './Assets/ilustrasi.svg'
import {Link} from 'react-router-dom'

function intro() {
    return (
        <div className="container">
            <div className="shape"></div>
              <h1>Baik App</h1>
            <div className="ilustration">
               <img src={ilustrasi} alt="ilustration" />
            </div>
        <div className="container-intro">
        <div className="intro">
            <p>Dengan Baik App kamu dapat dengan mudah :</p>
            <ul>
              <li>Menghubungi nomor layanan darurat</li>
              <li>Melaporkan segala tindak kejahatan</li>
            </ul>
        </div>
        </div>
            <div className="lanjut">
                <Link to='/opsi' style={{ color: 'inherit', textDecoration: 'inherit'}}><p>Lanjut</p></Link>
            </div>
    </div>
    )
}

export default intro

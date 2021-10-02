import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import Box from './Components/Box-Nomor/BoxNomor'
import './style.css'
import Close from './Assets/close.svg'
import PanggilOff from './Components/Button-Panggil/PanggilOff'
import PanggilOn from './Components/Button-Panggil/PanggilOn'


function NoDarurat() {
    const [panggil, setPanggil] = useState(<PanggilOff />)
    return (
        <div>
        <div className="layanan-telepon">
            <Link to='/opsi'><img className="close" src={Close} /></Link>
            <div className="judul-layanan"><p>Silahkan pilih nomor yang akan dihubungi</p></div>
            <div>
                <ul>
                    <li onClick={()=> setPanggil(<PanggilOn callNumber='119' />)}><Box number="119 - Ambulance/Kemenkes"/></li>
                    <li onClick={()=> setPanggil(<PanggilOn callNumber='110' />)}><Box number="110 - Polisi"/></li>
                    <li onClick={()=> setPanggil(<PanggilOn callNumber='113' />)}><Box number="113 - Pemadam Kebakaran"/></li>
                    <li onClick={()=> setPanggil(<PanggilOn callNumber='115' />)}><Box number="115 - Search And Rescue"/></li>
                    <li onClick={()=> setPanggil(<PanggilOn callNumber='122' />)}><Box number="122 - Posko Kewaspadaan Nasional"/></li>
                    <li onClick={()=> setPanggil(<PanggilOn callNumber='115' />)}><Box number="115 - PLN"/></li>
                    <li onClick={()=> setPanggil(<PanggilOn callNumber='113' />)}><Box number="113 - Hotline Covid-19"/></li>
                    <li onClick={()=> setPanggil(<PanggilOn callNumber='021799232' />)}><Box number="021799325 - PMI"/></li>
                </ul>
            </div>
            <div><p>{panggil}</p></div>
        </div>
        </div>
    )
}

export default NoDarurat

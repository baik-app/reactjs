import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import Box from './Components/Box-Nomor/BoxNomor'
import './style.css'
import Close from './Assets/close.svg'
import PanggilOff from './Components/Button-Panggil/PanggilOff'
import './Components/Button-Panggil/PanggilOn'
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
                    <li onClick={()=> setPanggil(PanggilOn('119'))}><Box number="119 - Ambulance/Kemenkes"/></li>
                    <li onClick={()=> setPanggil(PanggilOn('110'))}><Box number="110 - Polisi"/></li>
                    <li onClick={()=> setPanggil(PanggilOn('113'))}><Box number="113 - Pemadam Kebakaran"/></li>
                    <li onClick={()=> setPanggil(PanggilOn('115'))}><Box number="115 - Search And Rescue"/></li>
                    <li onClick={()=> setPanggil(PanggilOn('122'))}><Box number="122 - Posko Kewaspadaan Nasional"/></li>
                    <li onClick={()=> setPanggil(PanggilOn('115'))}><Box number="115 - PLN"/></li>
                    <li onClick={()=> setPanggil(PanggilOn('113'))}><Box number="113 - Hotline Covid-19"/></li>
                    <li onClick={()=> setPanggil(PanggilOn('021799325'))}><Box number="021799325 - PMI"/></li>
                </ul>
            </div>
            <div>{panggil}</div>
        </div>
        </div>
    )
}

export default NoDarurat

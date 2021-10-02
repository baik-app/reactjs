import React from 'react'
import Box from './Components/Box-Nomor/BoxNomor'
import './style.css'
import PanggilOff from './Components/Button-Panggil/PanggilOff'
import PanggilOn from './Components/Button-Panggil/PanggilOn'


function NoDarurat() {
    return (
        <div className="layanan-telepon">
            <div className="judul-layanan"><p>Silahkan pilih nomor yang akan dihubungi</p></div>
            <div>
                <ul>
                    <li><a href="tel:119"><Box number="119 - Ambulance/Kemenkes"/></a></li>
                    <li><Box number="110 - Polisi"/></li>
                    <li><Box number="113 - Pemadam Kebakaran"/></li>
                    <li><Box number="115 - Search And Rescue"/></li>
                    <li><Box number="122 - Posko Kewaspadaan Nasional"/></li>
                    <li><Box number="115 - PLN"/></li>
                    <li><Box number="113 - Hotline Covid-19"/></li>
                    <li><Box number="021799325 - PMI"/></li>
                </ul>
            </div>
            <div><PanggilOff /></div>
        </div>
    )
}

export default NoDarurat

import React from 'react'
import './style.css'
import Lapor from './laporOn.svg'
import Telepon from './telephone.svg'
import Aktifitas from './aktifitasOff.svg'
import { Link } from 'react-router-dom'


function NavHome() {
    return (
        <div className='container-nav'>
            <Link to='/noDarurat'><div className='telepon'><img src={Telepon} alt='telephone'/></div></Link>
            <div className='lapor'><img src={Lapor} alt='lapor'/></div>
            <div className='aktifitas'><img src={Aktifitas} alt='aktifitas'/></div>
        </div>
    )
}

export default NavHome

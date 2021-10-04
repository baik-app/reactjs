import React from 'react'
import Nav from './Components/Nav-Home/NavHome'
import Lapor from './Components/Opsi-Lapor/Pelaporan'
import AspirasiOff from './Components/Opsi-Lapor/AspirasiOff'
import BuatLaporan from './Assets/buat-laporan.svg'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='container-home'>
            <h1>Lapor</h1>
            <div className="garis"></div>
            <Lapor /><AspirasiOff />
            <div className='deskripsi'>
                <p>
                Anda dapat melaporkan permasalahan-permasalahan yang terjadi terhadap anda, orang lain, dan lingkungan sekitar anda. Laporan anda akan segera ditindak lanjuti dan terjamin aman.
                </p>
                <Link><div className='buat'><img src={BuatLaporan} alt='buat-laporan'/></div></Link>
            </div>
            <Nav />
        </div>
    )
}

export default Home

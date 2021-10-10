import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function opsiLapor(setLapor) {
    return (
        <div className='container-lapor'>
            <Link to='/Pelaporan'>
            <div className='opsi-pelaporan-off'>
                <h2>Pelaporan</h2>
            </div>
            </Link>
        </div>
    )
}

export default opsiLapor

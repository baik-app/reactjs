import React from 'react'
import { Link } from 'react-router-dom'

function AspirasiOff() {
    return (
        <div className="container-lapor">
            <Link to='/Aspirasi'>
            <div className='opsi-aspirasi-off'>
                <h2>Aspirasi</h2>
            </div>
            </Link>
        </div>
    )
}

export default AspirasiOff

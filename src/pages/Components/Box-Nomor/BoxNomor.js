import React from 'react'
import './style.css'

function BoxNomor({number}) {
    return (
        <div className='container-number'>
            <div className="box">
                <div className='number'>{number}</div>
            </div>
        </div>
    )
}

export default BoxNomor

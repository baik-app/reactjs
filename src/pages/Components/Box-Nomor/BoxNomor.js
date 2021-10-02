import React from 'react'
import './style.css'

function BoxNomor({number}) {
    return (
        <div>
            <button className="box" type='button'>
                <p>{number}</p>
            </button>
        </div>

    )
}

export default BoxNomor

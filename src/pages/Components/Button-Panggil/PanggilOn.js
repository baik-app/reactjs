import React from 'react'
import './style.css'

function PanggilOn(callNumber) {
    function call(){
        return callNumber
    }
    return (
        <div className='container-panggil'>
            <a href={'tel:'+call()}><div className='button-panggil-on'><p>Panggil</p></div></a>
        </div>
    )
}

export default PanggilOn

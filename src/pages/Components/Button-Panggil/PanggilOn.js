import React from 'react'
import './style.css'

function PanggilOn(callNumber) {
    function call(number){
        return "tel:" + number
    }
    return (
        <div className='container-panggil'>
            <a href={call(callNumber)}><div className='button-panggil-on'><p>Panggil</p></div></a>
        </div>
    )
    console.log(call());
}

export default PanggilOn

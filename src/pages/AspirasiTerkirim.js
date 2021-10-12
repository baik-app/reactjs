import React from 'react'
import Terkirim from './Assets/terkirim.svg'
import Close from "./Assets/close.svg";
import { Link } from 'react-router-dom';

function AspirasiTerkirim() {
    return (
        <div className='container'>
            <Link to="/Aspirasi">
               <img className="close" src={Close} alt="close" />
            </Link>
            <img className='terkirim' src={Terkirim} alt='Aspirasi Terkirim' />
        </div>
    )
}

export default AspirasiTerkirim


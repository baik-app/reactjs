import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from './Avatar.jpg'
import './style.css'

function Profil() {
    let user = JSON.parse(localStorage.getItem('users'))
    function logout(){
        localStorage.setItem('isLogin', 0)
    }
    return (
        <div className='box-profil'>
            <img className='avatar' src={Avatar} alt='profil'/>
            <div className='nama-akun'><h5>{user[0].nama}</h5></div>
            <div className='email'><h5>{user[0].email}</h5></div>
            <div id='logout' onClick={()=>logout()}><Link to='/opsi'><p>logout</p></Link></div>
        </div>
    )
}

export default Profil

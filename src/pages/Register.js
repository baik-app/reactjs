import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Masuk from './Login'

function Register() {

    let getLC

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onRegister = (e) => {
        console.log('register ditekan')
        getLC = {
            username,
            password
        }
        const getLcData = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
        console.log(getLcData)

        getLcData.push(getLC)
        console.log(getLcData)

        localStorage.setItem('users', JSON.stringify(getLcData))
        console.log('register berhasil!')
        
        e.preventDefault()
    }

    return (
        <div className="page-register">
            <h1>Daftar Ke Baik App</h1>
            <label htmlFor="username">Username : </label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

            <br />
            <br />

            <label htmlFor="password">Password : </label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <br />
            <br />

            <button type="submit" onClick={(e) => onRegister(e)}>Register</button>
            <p>Sudah punya akun?</p> 
            <Link to="/Login"
            style={{ color: "red", textDecoration: "inherit" }}> <p>Masuk</p>
            </Link>
        </div>
    )
}

export default Register

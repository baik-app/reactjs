import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Masuk from './Login'

function Register() {

    let getLC

    const [nik, setNik] = useState('')
    const [nama, setNama] = useState('')
    const [tempattinggal, setTempat] = useState('')
    const [tanggallahir, setTanggal] = useState('')
    const [jeniskelamin, setJenisKelamin] = useState('')
    const [notelpon, setNotelpon] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [konfirmasi, setKonfirPassword] = useState('')

    const onRegister = (e) => {
        console.log('register ditekan')
        getLC = {
            nik, nama, tempattinggal, tanggallahir, jeniskelamin, notelpon, email,
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
            <div className="nik">
            <label htmlFor="nik">NIK*  </label>
            <input type="text" id="nik" value={nik} onChange={(e) => setNik(e.target.value)} />
            </div>

            <div className="nama-lengkap">
            <label htmlFor="username">Nama lengkap*  </label>
            <input type="text" id="nama" value={nama} onChange={(e) => setNama(e.target.value)} />
            </div>

            <div className="tempat-tinggal">
            <label htmlFor="tempat-tinggal">Tempat tinggal saat ini* </label>
            <input type="text" id="tempat-tinggal" value={tempattinggal} onChange={(e) => setTempat(e.target.value)} />
            </div>

            <div className="tanggal-lahir">
            <label htmlFor="tanggal-lahir">Tanggal lahir* </label>
            <input type="date" id="tanggal-lahir" value={tanggallahir} onChange={(e) => setTanggal(e.target.value)} />
            </div>

            <div className="jenis-kelamin">
            <label htmlFor="jenis-kelamin">Jenis kelamin* </label>
            <input type="text" id="jeniskelamin" value={jeniskelamin} onChange={(e) => setJenisKelamin(e.target.value)} /> 
            </div>

            <div className="no-telpon">
            <label htmlFor="no-telpon">No. Telp aktif* </label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={notelpon} onChange={(e) => setNotelpon(e.target.value)} /> 
            </div>

            <div className="email">
            <label htmlFor="email">Alamat email* </label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} /> 
            </div>

            <div className="password">
            <label htmlFor="password">Password* </label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="konfirmasi-password">
            <label htmlFor="konfirmasi-password">Konfirmasi Password* </label>
            <input type="password" id="password" value={konfirmasi} onChange={(e) => setKonfirPassword(e.target.value)} />
            </div>
            

            <button type="submit" onClick={(e) => onRegister(e)}>Register </button>
            <p>Sudah punya akun?</p> 
            <Link to="/Login"
            style={{ color: "red", textDecoration: "inherit" }}> <p>Masuk</p>
            </Link>
        </div>
    )
}

export default Register

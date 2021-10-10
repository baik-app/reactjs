import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 
function Login() {
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(0)
 
    useEffect(() => {
        if (localStorage.getItem('isLogin') === '1') {
            setIsLogin(1)
        }
    }, [])
 
    const onSubmitHandler = (e) => {
        const getDataLc = JSON.parse(localStorage.getItem('users'))
        console.log(getDataLc)

        let match

        if (getDataLc) {
            for (let i = 0; i < getDataLc.length; i++) {
                if (getDataLc[i].email === email && getDataLc[i].password === password) {
                    localStorage.setItem('isLogin', 1)
                    localStorage.setItem('email', email)
                    setIsLogin(1)
                    match = true
                    break
                } else {
                    match = false
                }
            }
            if (!match) {
                alert('Email atau password salah')
            }
        } else {
            alert('Email atau password tidak ditemukan')
        }
        
        e.preventDefault()
    }
 
    return (
        <div>
        {isLogin === 1 ? 
            <h1>Anda sudah login</h1>:
        <div className="page-login">
            <h1>Login</h1>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
 
            <br />
            <br />
 
            <label htmlFor="password">Password : </label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
 
            <br />
            <br />
 
            <button type="submit" onClick={(e) => onSubmitHandler(e)}>Masuk</button>
            <p>Belum punya akun?</p> 
            <Link to="/Register"
            style={{ color: "red", textDecoration: "inherit" }}> <p> Daftar</p>
            </Link>
        </div>}
        </div>
    )
}
 
export default Login
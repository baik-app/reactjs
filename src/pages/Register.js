import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Components/loginregis/styles.css";
import Masuk from "./Login";
import Back from "./Assets/back.svg";

function Register() {
   let getLC;

   const [nik, setNik] = useState("");
   const [nama, setNama] = useState("");
   const [tempattinggal, setTempat] = useState("");
   const [tanggallahir, setTanggal] = useState("");
   const [jeniskelamin, setJenisKelamin] = useState("");
   const [notelpon, setNotelpon] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [konfirmasi, setKonfirPassword] = useState("");

   const onRegister = (e) => {
      console.log("register ditekan");
      getLC = {
         nik,
         nama,
         tempattinggal,
         tanggallahir,
         jeniskelamin,
         notelpon,
         email,
         password,
      };
      const getLcData = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
      console.log(getLcData);

      getLcData.push(getLC);
      console.log(getLcData);

      localStorage.setItem("users", JSON.stringify(getLcData));
      console.log("register berhasil!");

      e.preventDefault();
   };

   return (
      <div className="container-register">
         <div className="judul-login">
            <h2>Daftar Ke Baik App</h2>
            <Link to="/SilahkanLogin">
               <img src={Back} alt="back" />
            </Link>
         </div>
         <div className="nik">
            <label htmlFor="judulLog">NIK* </label>
            <br />
            <input type="text" id="form-judulLog" value={nik} onChange={(e) => setNik(e.target.value)} />
         </div>
         <div className="nama-lengkap">
            <label htmlFor="nama-lengkap">Nama lengkap* </label>
            <br />
            <input type="text" id="form-judulLog" value={nama} onChange={(e) => setNama(e.target.value)} />
         </div>
         <div className="tempat-tinggal">
            <label htmlFor="tempat-tinggal">Tempat tinggal saat ini* </label>
            <br />
            <input type="text" id="form-judulLog" value={tempattinggal} onChange={(e) => setTempat(e.target.value)} />
         </div>
         <div className="tanggal-lahir">
            <label htmlFor="tanggal-lahir">Tanggal lahir* </label>
            <br />
            <input type="date" id="form-judulLog" value={tanggallahir} onChange={(e) => setTanggal(e.target.value)} />
         </div>
         <div className="jenis-kelamin">
            <label htmlFor="jenis-kelamin">Jenis kelamin (L/P)* </label>
            <br />
            <input type="text" id="form-judulLog" value={jeniskelamin} onChange={(e) => setJenisKelamin(e.target.value)} />
         </div>
         <div className="no-telpon">
            <label htmlFor="no-telpon">No. Telp aktif* </label>
            <br />
            <input type="tel" id="form-judulLog" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={notelpon} onChange={(e) => setNotelpon(e.target.value)} />
         </div>
         <div className="emailReg">
            <label htmlFor="emailReg">Alamat email* </label>
            <br />
            <input type="email" id="form-judulLog" value={email} onChange={(e) => setEmail(e.target.value)} />
         </div>
         <div className="passwordReg">
            <label htmlFor="passwordReg">Password* </label>
            <br />
            <input type="password" id="form-judulLog" value={password} onChange={(e) => setPassword(e.target.value)} />
         </div>
         <div className="konfirmasi-password">
            <label htmlFor="konfirmasi-password">Konfirmasi Password* </label>
            <br />
            <input type="password" id="form-judulLog" value={konfirmasi} onChange={(e) => setKonfirPassword(e.target.value)} />
         </div>
         <button className="masukReg" type="submit" onClick={(e) => onRegister(e)}>
            <Link to='/Login'><p>Register</p></Link>
         </button>
         <div className="keLogin">
            <p>Sudah punya akun?</p>
            <Link to="/Login" style={{ color: "red", textDecoration: "inherit" }}>
               {" "}
               <p>Masuk</p>
            </Link>{" "}
         </div>
      </div>
   );
}

export default Register;

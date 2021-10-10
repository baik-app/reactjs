import React from "react";
import "./style.css";
import close from "./Assets/close.svg";
import { Link } from "react-router-dom";
import Masuk from "./Login";
import Register from "./Register";

function SilahkanLogin() {
  return (
    <div className="container-silahkanLogin">
      <Link to="/opsi">
        <img className="close-login" src={close} alt="close" />
      </Link>
      <div className="header-login">
        <h1>DAFTAR KE BAIK APP</h1>
        <p>Silahkan daftar untuk melanjutkan pelaporan</p>
      </div>
      <div>
        <Link to="/Register">
          <button id="button-daftar" type="button">
            <p>DAFTAR</p>
          </button>
        </Link>
      </div>
      <div className="masuk-login">
        <p>Sudah punya akun? </p>
        <Link
          to="/Login"
          style={{ color: "red", textDecoration: "inherit" }}
        >
          <p> Masuk</p>
        </Link>
      </div>
      <div className="ketentuan">
        <p>
          Dengan masuk atau mendaftar, saya menyetujui Ketentuan Layanan dan
          Kebijakan Privasi kami
        </p>
      </div>
    </div>
  );
}

export default SilahkanLogin;

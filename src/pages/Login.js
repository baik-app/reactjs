import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Components/loginregis/styles.css";
import Next from "./Assets/next.svg";
import Back from "./Assets/back.svg";

function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [isLogin, setIsLogin] = useState(0);

   useEffect(() => {
      if (localStorage.getItem("isLogin") === "1") {
         setIsLogin(1);
      }
   }, []);

   const onSubmitHandler = (e) => {
      const getDataLc = JSON.parse(localStorage.getItem("users"));
      console.log(getDataLc);

      let match;

      if (getDataLc) {
         for (let i = 0; i < getDataLc.length; i++) {
            if (getDataLc[i].email === email && getDataLc[i].password === password) {
               localStorage.setItem("isLogin", 1);
               localStorage.setItem("email", email);
               setIsLogin(1);
               match = true;
               break;
            } else {
               match = false;
            }
         }
         if (!match) {
            alert("Email atau password salah");
         }
      } else {
         alert("Email atau password tidak ditemukan");
      }

      e.preventDefault();
   };

   return (
      <div>
         {isLogin === 1 ? (
            <div className="container-selamatdatang">
               <div className="welcomes">
                  <p>Selamat datang di Baik App. Laporkan segala bentuk kejahatan disini.</p>
                  <Link to="/Pelaporan">
                     <img className="next" src={Next} alt="next" />
                  </Link>
               </div>
            </div>
         ) : (
            <div className="login-form">
               <div className="judul-login">
                  <h2>Masuk Ke Baik App</h2>
                  <Link to="/SilahkanLogin">
                     <img src={Back} alt="back" />
                  </Link>
               </div>

               <div className="conten-login">
                  <div className="emailLog">
                     <label htmlFor="judulLog">Email: </label>
                     <br />
                     <input type="email" placeholder="Masukan email anda" className="form-judulLog" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>

                  <div className="passwordLog">
                     <label htmlFor="judulLog">Password : </label>
                     <br />
                     <input type="password" placeholder="Masukan password email anda" className="form-judulLog" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <br />
               </div>

               {/* <div className="masukLog"> */}
               <button className="masukLog" type="submit" onClick={(e) => onSubmitHandler(e)}>
                  <p>Masuk</p>
               </button>
               {/* </div> */}

               <div className="keDaftar">
                  <p>Belum punya akun? </p>
                  <Link to="/Register" style={{ color: "red", textDecoration: "inherit" }}>
                     {" "}
                     <p> Daftar</p>
                  </Link>
               </div>
            </div>
         )}
      </div>
   );
}

export default Login;

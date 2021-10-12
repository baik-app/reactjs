import React, { useState } from "react";
import { Link } from "react-router-dom";
import Back from "./Assets/back.svg";
import './style.css'

function FormAspirasi() {
   let getLC;

   const [pengirim, setPengirim] = useState("");
   const [judul, setJudul] = useState("");
   const [isi, setIsi] = useState("");
   const [instansi, setInstansi] = useState("");
   const [kategori, setKategori] = useState("");

   let namaPengirim = JSON.parse(localStorage.getItem("users"));
   console.log(namaPengirim);

   const onSubmit = (e) => {
      const date = new Date();
      const tanggalBikin = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
      getLC = {
         pengirim,
         judul,
         isi,
         instansi,
         kategori,
         tanggalBikin,
      };

      const kaka = JSON.parse(localStorage.getItem("aspirasi"));

      const getLcData = localStorage.getItem("aspirasi") ? kaka : [];
      console.log(getLcData);

      getLcData.push(getLC);
      console.log(getLcData);

      localStorage.setItem("aspirasi", JSON.stringify(getLcData));
      console.log("register berhasil!");

      e.preventDefault();
   };

   return (
      <div className="form-container">
         <div className="judul-form">
            <h2>Formulir Aspirasi</h2>
            <Link to="/Aspirasi">
               <img src={Back} alt="back" />
            </Link>
         </div>
         <div className="pengirim">
            <ul>
               <li>Pengirim*</li>
               <li>
                  <input type="radio" name="drone" value={namaPengirim[0].nama} onChange={(e) => setPengirim(e.target.value)} />
                  Akun Pengguna
               </li>
               <li>
                  <input type="radio" name="drone" value="Anonim" onChange={(e) => setPengirim(e.target.value)} /> Anonim
               </li>
            </ul>
         </div>
         <div className="judul">
            <label htmlFor="judul">Judul Aspirasi*</label>
            <br />
            <input type="text" className="form-judul" value={judul} onChange={(e) => setJudul(e.target.value)} />
         </div>
         <div className="isi">
            <label htmlFor="isi">Isi Aspirasi*</label>
            <br />
            <textarea type="text" className="form-isi" value={isi} onChange={(e) => setIsi(e.target.value)} />
         </div>
         <div className="lampiran">
            <input type="file" className="costum-lampiran" />
         </div>
         <div className="instansi">
            <label>Instansi Tujuan*</label>
            <br />
            <select name="instansi" id="dropdown" value={instansi} onChange={(e) => setInstansi(e.target.value)}>
               <option value="">Pilih Instansi Tujuan</option>
               <option value="Pemerintah Kota Cimahi">Pemerintah Kota Cimahi</option>
               <option value="Polres">Polres Cimahi</option>
            </select>
         </div>
         <div className="kategori">
            <label>Kategori Aspirasi*</label>
            <br />
            <select name="kategori" id="dropdown" value={kategori} onChange={(e) => setKategori(e.target.value)}>
               <option value="Virus Corona">Pilih Kategori Aspirasi</option>
               <option value="Virus Corona">Virus Corona</option>
               <option value="Ekonomi dan Keuangan">Ekonomi dan Keuangan</option>
               <option value="Kesehatan">Kesehatan</option>
            </select>
         </div>
         <button className="overview" type="submit" onClick={(e) => onSubmit(e)}>
            <Link to="/AspirasiTerkirim">
               <p>Kirim</p>
            </Link>
         </button>
      </div>
   );
}

export default FormAspirasi;

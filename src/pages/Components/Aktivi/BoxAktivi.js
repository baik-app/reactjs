import React from "react";
import "./style.css";
import Aktivitas from './AktivitasList'

function BoxAktivi() {
  let aspirasi = JSON.parse(localStorage.getItem('aspirasi'))
  console.log(aspirasi);
  let pelaporan = JSON.parse(localStorage.getItem('pelaporan'))
  console.log(pelaporan);
  
  let data = aspirasi.concat(pelaporan)
  console.log(data);

  return (
  <div className="box-aktivitas">
    {data.map((item, index) => (<Aktivitas key={index} judul={item.judul} tanggal={item.tanggalBikin}/>) )}
  </div>
  )
}
export default BoxAktivi;

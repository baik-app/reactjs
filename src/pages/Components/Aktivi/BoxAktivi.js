import React from "react";
import "./style.css";
import Aktivitas from './AktivitasList'

function BoxAktivi() {
  let aspirasi = JSON.parse(localStorage.getItem('aspirasi'))
  console.log(aspirasi);
  let pelaporan = JSON.parse(localStorage.getItem('pelaporan'))
  console.log(pelaporan);
  
  let data
  if (aspirasi && pelaporan) {
    data = aspirasi.concat(pelaporan)
  }
  else if (aspirasi) {
    data = aspirasi
  }
  else if (pelaporan) {
    data = pelaporan
  }
  else {
    data = []
  }
  console.log(data);

  return (
  <div className="box-aktivitas">
    {data !== null ? data.map((item, index) => (<Aktivitas key={index} judul={item.judul} tanggal={item.tanggalBikin}/>) ): null}
  </div>
  )
}
export default BoxAktivi;

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Back from './Assets/back.svg'

function FormPelaporan() { 
  let getLC
 
  const [pengirim, setPengirim] = useState('')
  const [judul, setJudul] = useState('')
  const [isi, setIsi] = useState('')
  const [tempat, setTempat] = useState('')
  const [tanggal, setTanggal] = useState('')
  const [instansi, setInstansi] = useState('')
  const [kategori, setKategori] = useState('')

  let namaPengirim = JSON.parse(localStorage.getItem('users'))
  console.log(namaPengirim);

  const onSubmit = (e) => {
    const date = new Date();
    const tanggalBikin = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
      getLC = {
          pengirim,
          judul,
          isi,
          tempat,
          tanggal,
          instansi,
          kategori,
          tanggalBikin
      }

      const kaka = JSON.parse(localStorage.getItem("pelaporan"));

      const getLcData = localStorage.getItem('pelaporan') ? JSON.parse(localStorage.getItem('pelaporan')) : []
      getLcData.push(getLC)


      localStorage.setItem('pelaporan', JSON.stringify(getLcData))
      
      e.preventDefault()
  }

    return (
        <div className='form-container-pelaporan'>
            <div className='judul-form'>
                <h2>Formulir Pelaporan</h2>
                <Link to='/Pelaporan'><img src={Back} alt='back' /></Link>
                </div>
                <div className='pengirim'>
                    <ul>
                        <li>Pengirim*</li>
                        <li>
                            <input type="radio" name="drone" value={namaPengirim[0].nama} onChange={(e) => setPengirim(e.target.value)} />Akun Pengguna
                            </li>
                        <li>
                            <input type="radio" name="drone" value='Anonim' onChange={(e) => setPengirim(e.target.value)} /> Anonim
                        </li>
                    </ul>
                </div>

                <div className='judul'>
                    <label htmlFor="judul">Judul Pelaporan*</label><br/>
                    <input type="text" className="form-judul" value={judul} onChange={(e) => setJudul(e.target.value)} />
                </div>

                <div className='isi'>
                    <label htmlFor="isi">Isi Aspirasi*</label><br/>
                    <textarea type='text' className="form-isi" value={isi} onChange={(e) => setIsi(e.target.value)} />
                </div>

                <div className='lampiran'>
                    <input type='file' className='costum-lampiran' />
                </div>

                <div className='tempat'>
                    <label htmlFor="judul">Tempat Kejadian*</label><br/>
                    <input type='text' className="form-judul" value={tempat} onChange={(e) => setTempat(e.target.value)} />
                </div>

                <div className='tanggal'>
                    <label htmlFor="judul">Tanggal Kejadian*</label><br/>
                    <input type="date" className="form-judul" value={tanggal} onChange={(e) => setTanggal(e.target.value)} />
                </div>

                <div className='instansi-pelaporan'>
                    <label>Instansi Tujuan*</label><br/>
                    <select name="instansi" id="dropdown" value={instansi} onChange={(e) => setInstansi(e.target.value)}>
                        <option value="">Pilih Instansi Tujuan</option>
                        <option value="Pemerintah Kota Cimahi">Pemerintah Kota Cimahi</option>
                        <option value="Polres Cimahi">Polres Cimahi</option>
                    </select>
                </div>

                <div className='kategori-pelaporan'>
                    <label>Kategori Pelaporan*</label><br/>
                    <select name="kategori" id="dropdown" value={kategori} onChange={(e) => setKategori(e.target.value)}>
                        <option value="">Pilih Kategori Pelaporan</option>
                        <option value="Fasilitas Publik">Fasilitas Publik</option>
                        <option value="Penyelidikan Suatu Masalah">Penyelidikan Suatu Masalah</option>
                        <option value="Sosial dan Kesejahteraan">Sosial dan Kesejahteraan</option>
                        <option value="Penipuan dan Pencurian">Penipuan dan Pencurian</option>
                        <option value="Virus Corona">Virus Corona</option>
                        <option value="Ekonomi dan Keuangan">Ekonomi dan Keuangan</option>
                        <option value="Kesehatan">Kesehatan</option>
                    </select>
                </div>

          <button className='overview' type="submit" onClick={(e) => onSubmit(e)}><Link to='/PelaporanTerkirim'><p>Kirim</p></Link></button>
      </div>
  )
}

export default FormPelaporan
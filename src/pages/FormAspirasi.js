import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Back from './Assets/back.svg'

function FormAspirasi() { 
  let getLC
 
  const [judul, setJudul] = useState('')
  const [isi, setIsi] = useState('')
  const [instansi, setInstansi] = useState('')
  const [kategori, setKategori] = useState('')

  const onSubmit = (e) => {
      getLC = {
          judul,
          isi,
          instansi,
          kategori
      }
      const getLcData = localStorage.getItem('aspirasi') ? JSON.parse(localStorage.getItem('aspirasi')) : []
      console.log(getLcData)

      getLcData.push(getLC)
      console.log(getLcData)

      localStorage.setItem('aspirasi', JSON.stringify(getLcData))
      console.log('register berhasil!')
      
      e.preventDefault()
  }

    return (
        <div className='form-container'>
            <div className='judul-form'>
                <h2>Formulir Aspirasi</h2>
                <Link to='/Aspirasi'><img src={Back} alt='back' /></Link>
                </div>
                <div className='pengirim'>
                    <ul>
                        <li>Pengirim*</li>
                        <li>
                            <input type="radio" name="drone"/> Akun Pengguna
                            </li>
                        <li>
                            <input type="radio" name="drone" /> Anonim
                        </li>
                    </ul>
                </div>
                <div className='judul'>
                    <label htmlFor="judul">Judul Aspirasi*</label><br/>
                    <input type="text" className="form-judul" value={judul} onChange={(e) => setJudul(e.target.value)} />
                </div>
                <div className='isi'>
                    <label htmlFor="isi">Isi Aspirasi*</label><br/>
                    <textarea type='text' className="form-isi" value={isi} onChange={(e) => setIsi(e.target.value)} />
                </div>
                <div className='lampiran'>
                    <input type='file' className='costum-lampiran' />
                </div>
                <div className='instansi'>
                    <label>Instansi Tujuan*</label><br/>
                    <select name="instansi" id="dropdown" value={instansi} onChange={(e) => setInstansi(e.target.value)}>
                        <option value="volvo">Pemerintah Kota Cimahi</option>
                        <option value="saab">Polres Cimahi</option>
                    </select>
                </div>
                <div className='kategori'>
                    <label>Kategori Aspirasi*</label><br/>
                    <select name="kategori" id="dropdown" value={kategori} onChange={(e) => setKategori(e.target.value)}>
                        <option value="volvo">Virus Corona</option>
                        <option value="saab">Ekonomi dan Keuangan</option>
                        <option value="saab">Kesehatan</option>
                    </select>
                </div>
          <button className='overview' type="submit" onClick={(e) => onSubmit(e)}><p>Overview</p></button>
      </div>
  )
}

export default FormAspirasi
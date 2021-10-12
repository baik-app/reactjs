import React from 'react'

function ListAktivitas({judul, tanggal}) {
    return (
        <div className='box-list' >
            <p className='judul'>{judul}</p>
            <p className='tanggal'>{tanggal} terkirim</p>
        </div>
    )
}

export default ListAktivitas

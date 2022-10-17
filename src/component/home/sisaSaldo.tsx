import React from 'react'

export default function SisaSaldo() {
  const sisa_saldo = 1000
  return (
    <div className='bg-blue-900 p-3 m-3 rounded-xl shadow text-white uppercase font-bold flex flex-auto'>
      <div className='p-2'>Rp.{sisa_saldo}</div>
      <div className='ml-auto p-2'>
        <a href='#show-detail-saldo'>Show detail</a>
      </div>
    </div>
  )
}

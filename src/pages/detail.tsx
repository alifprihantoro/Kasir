import React from 'react'
export default function DetailSaldo() {
  const saldo = {
    total: 15000,
    pecahan: {
      '1k': 3,
      '2k': 2,
      '5k': 2,
      '10k': 0,
      '20k': 0,
      '50k': 0,
      '100k': 0,
    },
  }
  const nama_pecahan = Object.keys(saldo.pecahan)
  const hasil_pecahan = Object.values(saldo.pecahan)

  return (
    <div className='z-10 fixed w-[720px] top-1 bg-blue-900/80 backdrop-blur-lg p-10 rounded-2xl text-white'>
      <div className='bg-white/30 backdrop-blur-sm rounded-xl p-3'>total saldo = {saldo.total}</div>
      <div className='flex flex-wrap'>
        {nama_pecahan.map((nama, i) => {
          // console.log(isi_pecahan[index])
          return (
            <div key={i} className='p-3 m-3 rounded-xl bg-white/30 backdrop-blur-sm  w-fit'>
              {nama} ({hasil_pecahan[i]})
            </div>
          )
        })}
      </div>
    </div>
  )
}

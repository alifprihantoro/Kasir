import React from 'react'
import Input from '../component/global/input'

const sample = [
  {
    nama: 'nama barang',
    harga: 5000,
  },
  {
    nama: 'nama barang2',
    harga: 3000,
  },
]
export default function Out() {
  const tesFunc = () => {
    console.log('hello')
  }
  return (
    <div className='z-10 fixed w-[720px] top-1 bg-blue-900/70 backdrop-blur-lg p-10 rounded-2xl text-white'>
      <form onSubmit={tesFunc}>
        <Input nama='nama' Placeholder='Nama Barang' type='text' />
        <Input nama='harga' Placeholder='Harga Barang' type='number' />
        <button
          className='shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
          type='button'
        >
          Add
        </button>
      </form>
      <div className=''>
        <h3>list barang</h3>
        {sample.map((data) => {
          return (
            <div className='flex w-full h-full m-3 bg-white/30 backdrop-blur-sm rounded-xl'>
              <div className='p-3 my-auto text-blue-900 bold uppercase'>
                {data.nama}
                <br />
                Rp.{data.harga}
              </div>
              <div className='ml-auto my-auto block text-white'>
                <button className='p-3 m-3 w-fit rounded-xl bg-blue-900/80'>edit</button>
                <button className='p-3 m-3 w-fit rounded-xl bg-red-900/80'>delete</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

import React from 'react'
const sample_menu = [
  {
    nama: 'serabi',
    harga: 6000,
  },
  {
    nama: 'samier',
    harga: 5000,
  },
]
export default function MenuPay() {
  return (
    <div>
      <h3 className='text-center uppercase font-bold'>Menu</h3>
      {sample_menu.map((data) => {
        return (
          <div className='flex w-full h-full m-3 bg-white/30 backdrop-blur-sm rounded-xl'>
            <div className='flex'>
              <img className='w-[100px] h-[100px] rounded-[50%] bg-blue-900' src='/' alt='' />
              <div className='p-3 my-auto text-blue-900 bold uppercase'>
                {data.nama} - {data.harga} - (1)
              </div>
            </div>
            <div className='ml-auto my-auto block text-white'>
              <span className='p-3 m-3 w-fit rounded-xl bg-blue-900/80'>add</span>
              <span className='p-3 m-3 w-fit rounded-xl bg-red-900/80'>delete</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

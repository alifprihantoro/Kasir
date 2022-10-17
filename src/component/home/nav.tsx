import React from 'react'

const datas = [
  {
    icon: 'home',
    text: 'home',
  },
  {
    icon: 'pay',
    text: 'income',
  },
  {
    icon: 'icon',
    text: 'credit',
  },
  {
    icon: 'icon',
    text: 'paying',
  },
  {
    icon: 'icon',
    text: 'sinkron',
  },
  {
    icon: 'icon',
    text: 'histori',
  },
]
export default function NavHome() {
  return (
    <nav>
      <ul className='flex text-white'>
        {datas.map((data) => {
          return (
            <li className='p-3 m-3 rounded-xl bg-blue-900'>
              <a href={'#' + data.text}>{data.text}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

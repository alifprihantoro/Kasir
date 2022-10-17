import React from 'react'
export default function ReturnPay() {
  const sample_kembalian = { '2k': 2, '1k': 1 }
  const key_kembalian = Object.keys(sample_kembalian)
  const val_kembalian = Object.values(sample_kembalian)
  return (
    <div>
      <h3>Kembalian</h3>
      <ul>
        {key_kembalian.map((data, i) => {
          return (
            <li key={i} className=''>
              {data} - {val_kembalian[i]}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

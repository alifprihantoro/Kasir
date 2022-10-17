import React, { ReactElement } from 'react'
const dummy = [
  { nominal: 5000, kategory: ['marketing', 'internet'], type: 'pay' },
  { nominal: 5000, kategory: ['makanan'], type: 'income' },
]
const isPositive = (type: string) => {
  let positive: boolean
  switch (type) {
    case 'pay':
      positive = false
      break

    case 'credit':
      positive = false
      break
    case 'income':
      positive = true
      break
  }
  return positive
}
export default function ShortHistory(): ReactElement {
  return (
    <div>
      {dummy.map((data) => {
        return (
          <div
            className={`p-3 m-3 rounded-xl text-white ${
              isPositive(data.type) ? 'bg-blue-900' : 'bg-red-900'
            }`}
          >
            <h3>
              {!isPositive(data.type) && '-'}Rp.{data.nominal}
            </h3>
            Kategory :
            {data.kategory.map((data) => {
              return <span>{data}</span>
            })}
            type : <span>{data.type}</span>
          </div>
        )
      })}
    </div>
  )
}

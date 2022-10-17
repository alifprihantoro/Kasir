import React from 'react'
import MenuPay from '../component/pay/menu'
import PaymentMethod from '../component/pay/method'
import ReturnPay from '../component/pay/return'

export default function Pay() {
  return (
    <div className='z-10 fixed w-[720px] top-1 bg-blue-900/80 backdrop-blur-lg p-10 rounded-2xl '>
      <MenuPay />
      <PaymentMethod />
      <ReturnPay />
    </div>
  )
}

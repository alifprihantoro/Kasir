import React, {ReactElement} from 'react'
import Out from './out'
import Pay from './pay'
import Home from './home'
import Credit from './credit'
import SyncPage from './sync'
import DetailSaldo from './detail'

export default function Pages():ReactElement {
  return (
    <>
      <div className='w-[720px] m-auto bg-blue-900/10 p-3'>
        <Home />
      {/* <DetailSaldo/> */}
      {/* <Pay/> */}
        <Out/>
        {/* <SyncPge/> */}
      </div>
    </>
  )
}

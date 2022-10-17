import React from 'react'
import ShortHistory from '../component/home/shortHistory'
import NavHome from '../component/home/nav'
import SisaSaldo from '../component/home/sisaSaldo'

export default function Home() {
  return (
    <>
      <SisaSaldo />
      <NavHome />
      <ShortHistory/>
    </>
  )
}

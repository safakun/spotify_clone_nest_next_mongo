import React from 'react'
import Navbar from '../compnents/Navbar'

const Mainlayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Mainlayout

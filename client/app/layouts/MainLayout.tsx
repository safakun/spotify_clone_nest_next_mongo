import React from 'react'
import Navbar from '../compnents/Navbar'
import { Container } from '@mui/material'

const Mainlayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <>
      <Navbar />
      <Container className='main_container'>
      {children}
      </Container>
     
    </>
  )
}

export default Mainlayout

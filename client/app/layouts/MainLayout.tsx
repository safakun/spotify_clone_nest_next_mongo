import React from 'react'
import Navbar from '../compnents/Navbar'
import { Container } from '@mui/material'
import Player from '../compnents/Player'

const Mainlayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <>
      <Navbar />
      <Container className='main_container'>
      {children}
      </Container>
     <Player />
    </>
  )
}

export default Mainlayout

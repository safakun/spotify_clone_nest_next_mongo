"use client"
import React from 'react'
import Mainlayout from '../layouts/MainLayout'
import { Card, Grid, Button, Box} from '@mui/material'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter()
  return (
  <Mainlayout>
    
      <Grid container justifyContent="center">
        <Card className="card">
          
          <Box p={10}>
          <Grid container justifyContent="space-between">
            <h1>List of tracks</h1>
            <Button
             onClick={() => router.push('/tracks/create')}
             >Add track</Button>
          </Grid>
          </Box>

          
        </Card>
      </Grid>
  </Mainlayout>
  )
}

export default page

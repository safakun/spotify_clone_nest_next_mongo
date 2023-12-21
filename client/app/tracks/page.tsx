"use client"
import React from 'react'
import Mainlayout from '../layouts/MainLayout'
import { Card, Grid, Button, Box} from '@mui/material'
import { useRouter } from 'next/navigation'
import { ITrack } from '../types/track'
import TrackList from '../compnents/TrackList'

const page = () => {
  const router = useRouter()

  const tracks: ITrack[] = [
    {_id: '1',  name: 'Track 1', text: 'Track text 1', listens: 0, comments: [{ _id: '1', username: "Dimon", text: 'My comment' }], artist: "30 cent", picture: 'pic.png', audio: 'track.mp3' },
    {_id: '2',  name: 'Track 2', text: 'Track text 2', listens: 0, comments: [{ _id: '2', username: "Dimon", text: 'My comment 2' }], artist: "Onyx", picture: 'pic.png', audio: 'track.mp3' }
  ]

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

          <TrackList
          tracks={tracks}
          />
        </Card>
      </Grid>
  </Mainlayout>
  )
}

export default page

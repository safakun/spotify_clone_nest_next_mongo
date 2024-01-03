"use client"

import Mainlayout from '@/app/layouts/MainLayout'
import { ITrack } from '@/app/types/track'
import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react'

const TrackPage = () => {

    const track: ITrack =  {_id: '2',  name: 'Track 2', text: 'Track text 2', listens: 0, comments: [{ _id: '2', username: "Dimon", text: 'My comment 2' }], artist: "Onyx", picture: 'pic.png', audio: 'track.mp3' };

    const router = useRouter()

  return (
    <Mainlayout>
      <Button 
      className='totracks'
      variant='outlined'
      onClick={() => router.push('/tracks')}
      >
        To track list
      </Button>
     <Grid container className='basetrack'> 
     <img src={track.picture} alt={track.name} width={200} height={200} />
     <div>
      <h1>Track name: {track.name}</h1>
      <h1>Track artist: {track.artist}</h1>
      <h1>Number of listens: {track.listens}</h1>

     </div>
     </Grid>
     <h1>Word to track</h1>
     <p>{track.text}</p>
     <h1>Comments</h1>
     <Grid container>
      <TextField
      label="Your name"
      fullWidth
       />
          <TextField
      label="Comment"
      fullWidth
      multiline
      rows={4}
       />
       <Button>
        Send comment
       </Button>
     </Grid>
     <div>
      {track.comments.map(comment => 
        <div>
          <div>Author: {comment.username}</div>
          <div>Comment: {comment.text}</div>
        </div>
        )}
     </div>
    </Mainlayout>
  )
}

export default TrackPage
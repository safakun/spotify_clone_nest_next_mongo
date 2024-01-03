"use client"
import { Pause, PlayArrow } from '@mui/icons-material'
import { IconButton, Grid } from '@mui/material'
import React from 'react'
import styles from '../styles/Player.module.css'
import { ITrack } from '../types/track'
import TrackProgress from './TrackProgress'

const Player = () => {

    const track: ITrack = {_id: '2',  name: 'Track 2', text: 'Track text 2', listens: 0, comments: [{ _id: '2', username: "Dimon", text: 'My comment 2' }], artist: "Onyx", picture: 'pic.png', audio: 'track.mp3' }

    const active = false 

  return (
    <div className={styles.player}>
      <IconButton 
        onClick={(e) =>  e.stopPropagation()}
        >
            {
                !active ? <PlayArrow /> : <Pause />
            }
        </IconButton>
        <Grid container direction='column' className='player'>
          <div>{track.name}</div>
          <div className='artist'>
            {track.artist}
          </div>
        </Grid>
        <TrackProgress left={0} right={100} onChange={() => ({})} />
    </div>
  )
}

export default Player

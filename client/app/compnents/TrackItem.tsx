import React from 'react'
import { ITrack } from '../types/track'
import { Card, Grid, IconButton } from '@mui/material'

import styles from './TrackItem.module.css';
import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

interface TrackItemProps {
    track: ITrack,
    active?: boolean,

}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {

  const router = useRouter()

  return (
    <Card
    onClick={() => router.push('/tracks/' + track._id)}
    className={styles.track}>
        <IconButton 
        onClick={(e) =>  e.stopPropagation()}
        >
            {
                !active ? <PlayArrow /> : <Pause />
            }
        </IconButton>
        <img width={70} height={70}  src={track.picture} />
        <Grid className={styles.trackinfo} container direction="column">
          <div> {track.name}</div>
          <div className={styles.trackArtist}> {track.artist}</div>
          </Grid>
     { active && <div>02:42 / 03:22</div> }
     <IconButton
     onClick={e => e.stopPropagation()}
     className={styles.delete}>
      <Delete />
     </IconButton>
    </Card>
  )
}

export default TrackItem

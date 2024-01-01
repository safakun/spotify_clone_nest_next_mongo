import Mainlayout from '@/app/layouts/MainLayout'
import { ITrack } from '@/app/types/track'
import React from 'react'

const TrackPage = () => {

    const track: ITrack =  {_id: '2',  name: 'Track 2', text: 'Track text 2', listens: 0, comments: [{ _id: '2', username: "Dimon", text: 'My comment 2' }], artist: "Onyx", picture: 'pic.png', audio: 'track.mp3' };

  return (
    <Mainlayout>
      Track page
    </Mainlayout>
  )
}

export default TrackPage
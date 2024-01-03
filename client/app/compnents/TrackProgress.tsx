import React from 'react'

interface TrackProgressProps {
  left: number;
  right: number;
  onChange: (e: any) => void;
}

const TrackProgress: React.FC<TrackProgressProps> = ({
  left, right, onChange
}) => {


  return (
    <div className='playerprogressbar'>
      <input
      type="range"
      min={left}
      max={right}
      value={left}
      onChange={onChange}
      />
      <div>{left} / {right}</div>
    </div>
  )
}

export default TrackProgress

"use client"

import React, { useState } from 'react'
import Mainlayout from '../../layouts/MainLayout'
import StepWrapper from '@/app/compnents/StepWrapper'
import { Button, Grid, TextField } from '@mui/material'
import FileUpload from '@/app/compnents/FileUpload'

const create = () => {

  const [activeStep, setActiveStep] = useState(0)

  const back = () => {
    setActiveStep(prev => prev - 1)
  }
  const next = () => {
    if (activeStep !== 3) {
      setActiveStep(prev => prev + 1)
    }
    
  }

  return (
    <Mainlayout>
      <StepWrapper activeStep={activeStep}>
        { activeStep === 0 &&
        <Grid container direction='column' className='stepsitem'>
          <TextField 
          label={'Track name'}
          className='trackinput'
          />
           <TextField 
          label={'Track author name'}
          className='trackinput'
          /> 
           <TextField 
          label={'Track text'}
          className='trackinput'
          multiline
          rows={3}
          />
        </Grid>
       
        }    
        { activeStep === 1 &&
        <FileUpload file={''} setFile={() => ({})} accept="image/*">
          <Button>Upload track image</Button>
          </FileUpload>
        }   
        { activeStep === 2 &&
        <h1>STEP 3 </h1>
        }   
      </StepWrapper>
     <Grid container justifyContent={'space-between'}>
      <Button disabled={activeStep === 0} onClick={back}>Back</Button>
      <Button onClick={next}>Next</Button>
     </Grid>
     
    </Mainlayout>
  )
}

export default create

"use client"

import React, { useState } from 'react'
import Mainlayout from '../../layouts/MainLayout'
import StepWrapper from '@/app/compnents/StepWrapper'
import { Button, Grid } from '@mui/material'

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
        { activeStep === 1 &&
        <h1>STEP 1 </h1>
        }    
        { activeStep === 2 &&
        <h1>STEP 2 </h1>
        }   
        { activeStep === 3 &&
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

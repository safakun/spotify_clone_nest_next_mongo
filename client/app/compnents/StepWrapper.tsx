import { Container, Step, StepLabel, Stepper, Grid, Card } from '@mui/material';
import React from 'react'

interface StepWrapperProps {
    activeStep: number;
    children: any;
}

const steps = ['Track info', 'Load track picture', 'Load track audio file']

const StepWrapper: React.FC<StepWrapperProps> = ({ activeStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => 
            <Step
            key={index}
            >
                <StepLabel>
                    {step}
                </StepLabel>
             
            </Step>
            )}
      </Stepper>
      <Grid container justifyContent='center' className='steps'>
        <Card className='stepscard'>
            {children}
        </Card>
      </Grid>
    </Container>
  )
}

export default StepWrapper

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NameInput from '../LoginPage/NameInput';
import NumberInput from '../LoginPage/NumberInput';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Input Details', 'OTP Verification', 'Select Location'];
  //naming the steps 
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Input Details';
    case 1:
      return 'OTP Verification';
    case 2:
      return 'Select Location';
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            
            <Link to={process.env.PUBLIC_URL + '/home'}>
              <Button onClick={handleReset}>Finish Sign Up</Button> </Link>
             </div>

        ) : (

          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <NameInput />
              <NumberInput />
              
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}>
                Back
              </Button>

              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

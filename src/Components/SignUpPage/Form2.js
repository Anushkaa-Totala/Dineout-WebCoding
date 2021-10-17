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
import PasswordInput from '../LoginPage/PasswordInput';
import ControlledOpenSelect from '../HomePage/dropdown';
import RePassInput from './RePasswordInput';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const muiTheme = createMuiTheme({
    stepper: {
        iconColor: 'green' // or logic to change color
    }
})

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
      return 'Input Details 1';
    case 1:
      return 'OTP Verification 2 ';
    case 2:
      return 'Select Location 3';
    default:
      return 'Unknown stepIndex 4';
  }
}

export default function StepForm() {
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
      <MuiThemeProvider muiTheme={muiTheme}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper> </MuiThemeProvider>

      {/* <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography> */}

      <div>
        {activeStep === steps.length ? (
          <><Typography>
            Account Successfully created!
            </Typography>

            <Link to={process.env.PUBLIC_URL + '/home'}>
            <Button  variant="contained" color="secondary" type="submit">SUBMIT </Button> </Link>
          </>

        ) : (

          <><div>

            {activeStep === steps.length - 3 ? <NameInput/> : ''}
            {/* to get name input on step 1 */}
            {activeStep === steps.length - 3 ? <NumberInput/> : ''}
            {/* to get number input on step 1 */}

            {activeStep === steps.length - 2 ? <PasswordInput /> : ''}
            {/* to get password input on step 2 */}
            {activeStep === steps.length - 2 ? <RePassInput /> : ''}
            {/* to get password input on step 2 */}

            {activeStep === steps.length - 1 ? <ControlledOpenSelect/> : ''}
            {/* to get select city on step 3 */}

            <div>
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

          </div></>  )}

      </div>
    </div>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NameInput from './NameInput';
import NumberInput from './NumberInput';
import { Link } from 'react-router-dom';
import PasswordInput from './PasswordInput';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  login:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 25,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
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
  return ['Input Details', 'OTP Verification'];
  //naming the steps 
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Input Details 1';
    case 1:
      return 'OTP Verification 2 ';
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

  return (
    <><div>

      {activeStep === steps.length - 2 ? <NameInput /> : ''}
      {/* to get name input on step 1 */}
      {activeStep === steps.length - 2 ? <NumberInput /> : ''}
      {/* to get number input on step 1 */}


      {activeStep === steps.length - 1 ? <PasswordInput /> : ''}
      {/* to get password input on step 2 */}


      <div>
        <Button disabled={activeStep === 0} onClick={handleBack} className={classes.backButton}> Back </Button>

        {activeStep === steps.length - 2 ? <Button onClick={handleNext}>next</Button> : ''}
        {/* to get next button on step 1 */}

        {activeStep === steps.length - 1 ? <Link to={process.env.PUBLIC_URL + '/home'}><Button className={classes.login }>LOGIN</Button></Link> : ''}
        {/* to get LOGIN button on step 2 */}

      </div>

    </div></>)
}


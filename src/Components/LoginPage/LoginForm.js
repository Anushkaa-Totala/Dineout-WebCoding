import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NameInput from './NameInput';
import NumberInput from './NumberInput';
import PasswordInput from './PasswordInput';
import { Grid } from '@material-ui/core';
import LoginButton from './LoginButton';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  login: {
    background: 'linear-gradient(45deg, #FE6B8B 10%, #F2635C 90%)',
    border: 0,
    borderRadius: 15,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 45,
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

      <Grid container spacing={2} direction="column"
        alignItems="center"
        justify="center">
        {/* adding all components sequentially in grids */}

        <Grid item xs={12}>
          {activeStep === steps.length - 2 ? <NameInput /> : ''}
          {/* to get name input on step 1 */} </Grid>

        <Grid item xs={12}>
          {activeStep === steps.length - 2 ? <NumberInput /> : ''}
          {/* to get number input on step 1 */}</Grid>

        <Grid item xs={12}>
          {activeStep === steps.length - 1 ? <PasswordInput /> : ''}
          {/* to get password input on step 2 */}  </Grid>
      </Grid>

      <div>

        <Grid container spacing={2} direction="row"
          alignItems="center"
          justify="center">
          {/* adding all components sequentially in grids */}

          <Grid item xs={12}></Grid>

          <Grid item xs={4}>
            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.backButton}> Back </Button> </Grid>

          <Grid item xs={4}>
            {activeStep === steps.length - 2 ? <Button onClick={handleNext} className={classes.login}>next</Button> : <LoginButton />}
            {/* to get next button on step 1 */} </Grid>

        </Grid>
      </div>

    </div></>)
}


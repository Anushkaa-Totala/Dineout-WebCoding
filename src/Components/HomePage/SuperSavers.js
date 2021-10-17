import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const tutorialSteps = [      //adding all the image links
  {
    imgPath:
      'https://im1.dineout.co.in/images/uploads/misc/2021/Sep/3/souffle74681.jpg?tr=tr:n-medium',
  },
  {
    imgPath:
      "https://im1.dineout.co.in/images/uploads/misc/2021/Sep/13/app_banner.jpg?tr=tr:n-medium",
  },
  {
    imgPath:
      'https://im1.dineout.co.in/images/uploads/misc/2021/Sep/9/app96640.jpg?tr=tr:n-medium',
  },
  {
    imgPath:
      'https://im1.dineout.co.in/images/uploads/misc/2021/Aug/24/bbqapp.jpg?tr=tr:n-medium',
  },

];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350, //setting the width of the box
    flexGrow: 1,
  },
  header: {
    fontFamily: 'Lato',
    paddingLeft: theme.spacing(2),
    fontSize: 22,
    textAlign: 'left',
  },
  img: {
    border: 0,
    borderRadius: 22,
    height: 255,
    minWidth: 300,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
}));

export default function SuperSavers() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <p>
          Super Savers
          {/* //setting title label */}
        </p>
      </Paper>
      <img
        className={classes.img}
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
      />
      <MobileStepper
        variant="dots"
        steps={4}  // setting number of slides
        position="static"
        activeStep={activeStep}
        className={classes.root}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 3}>
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </Button>
        }
      />
    </div>
  );
}
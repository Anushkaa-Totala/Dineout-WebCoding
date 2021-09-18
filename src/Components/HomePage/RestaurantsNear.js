import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const tutorialSteps = [    //adding all the image links
  {
    imgPath:
      'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/b/y/p2441-1461398849571b2d4182221.jpg?tr=tr:n-large',
  },
  {
    imgPath:
      "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/o/w/p9884-148912801358c24a4d347c8.jpg?tr=tr:n-large",
  },
  {
    imgPath:
      'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/f/o/p58280-16002482485f61d9b800bbd.jpg?tr=tr:n-large',
  },
  {
    imgPath:
      'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/k/a/p12377-1483686652586f42fce041e.jpg?tr=tr:n-large ',
  },

];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350, //setting the width of the box
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
}));

export default function RestaurantsNearYou() {
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
          Restaurants Near You
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
        steps={4} // setting number of slides
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
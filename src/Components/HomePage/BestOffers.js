import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Grid, Typography } from '@material-ui/core';


const tutorialSteps = [     //adding all the image links
  {
    imgPath:
      'data:image/jpeg;base64,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',
  },
  {
    imgPath:
      "data:image/jpeg;base64,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",
  },
  {
    imgPath:
      'https://www.dineout.co.in/blog/wp-content/uploads/2020/01/Blog_GIRF2020-2.jpg',
  },

];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,  //setting the width of the box
    flexGrow: 1,
  },
  header: {
    fontFamily: 'Lato',
    paddingLeft: theme.spacing(2),
    fontSize: 22,
    textAlign: 'left',
  },

  img: {
    minHeight: 250,  //setting the height of the image
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
}));

export default function BestOffers() {
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

      <Grid container spacing={1}
        direction="row"
        alignContent="center"
        alignItems="center">

        <Grid item xs={12}> <Typography className={classes.header}>
          Best Offers </Typography>
          {/* //setting title label */}
        </Grid>

        <Grid item xs={12}>
          <img
            className={classes.img}
            src={tutorialSteps[activeStep].imgPath} /> </Grid>

        <Grid item xs={12}>
          <MobileStepper
            variant="dots"
            steps={3} // setting number of slides
            position="center"
            activeStep={activeStep}
            className={classes.root}
            nextButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === 2}>
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              </Button>} /> </Grid>

      </Grid>
    </div>
  );
}
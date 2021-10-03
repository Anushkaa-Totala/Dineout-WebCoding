import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const tutorialSteps = [    //adding all the image links
  {
    imgPath:
      'https://im.whatshot.in/img/2019/Oct/p48505-15423548675bee77b321fec-1571465824.jpg',
    name: 'Pop Tates',
    cuisine1: 'ITALIAN ',
    cuisine2: 'CHINESE',
    cuisine3: 'SEA-FOOD',
    address: '101, Andheri Lokhandwala, Andheri West.',
  },
  {
    imgPath:
      'https://b.zmtcdn.com/data/pictures/4/44934/f7397a982049ea62501f2b561162d078.jpg?fit=around|960:500&crop=960:500;*,*',
    name: 'Hurrycane',
    cuisine1: 'JUICE',
    cuisine2: 'FAST FOODS',
    // cuisine3: 'cuisine1',
    address: 'Andheri Lokhandwala, Mumbai',
  },
  {
    imgPath:
      'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/o/i/p39269-15217941085ab4bc3ca5b27.jpg?tr=tr:n-large',
    name: 'Banjara',
    cuisine1: 'INDIAN',
    cuisine2: 'CHINESE',
    cuisine3: 'CONTINENTAL',
    address: 'Goldfinch Hotel, MIDC, Mumbai',
  },
  {
    imgPath:
      'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/k/l/p48928-15421998055bec19fd6796d.jpg?tr=tr:n-large',
    name: 'Mitron',
    cuisine1: 'INDIAN',
    cuisine2: 'CONTINENTAL',
    cuisine3: 'CHINESE',
    address: 'Peninsula Grand Hotel, Sakinaka.',
  },

];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350, //setting the width of the box
    flexGrow: 1,
  },
  button: {
    fontFamily: 'Lato',
    color: 'white',
    backgroundColor: 'purple',
    fontSize: 10,
  },
  header: {
    fontFamily: 'Lato',
    paddingLeft: theme.spacing(2),
    fontSize: 22,
    textAlign: 'left',
  },
  name: {
    fontFamily: 'Lato',
    paddingLeft: theme.spacing(2),
    fontSize: 20,
    textAlign: 'left',
  },
  body: {
    fontFamily: 'Lato',
    color: 'grey',
    paddingLeft: theme.spacing(2),
    textAlign: 'left',
    fontSize: 14,
  },
  paper: {
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

      <Paper className={classes.paper}>
        <Grid container spacing={1}
          direction="row"
          alignContent="center"
          alignItems="center">

          <Grid item xs={12}>    {/* none of the following content is clickable, only restaurant name will be clickable, to the restaurant page*/}
            <Typography className={classes.header}>
              {/* adding a constant header */}
              Restaurants Near You
            </Typography></Grid>

          <Grid item xs={12}> <img
            className={classes.img}
            src={tutorialSteps[activeStep].imgPath} />
            {/* images */}
          </Grid>

          <Grid item xs={4}>
            <Typography className={classes.name}>
              {tutorialSteps[activeStep].name}
              {/* name of each restaurant */}
            </Typography>
          </Grid>

          <Grid item xs={2.5}>
            <Typography className={classes.button}>
              {tutorialSteps[activeStep].cuisine1}</Typography>
            {/* cuisine 1 */}
          </Grid>

          <Grid item xs={2.5}>
            <Typography className={classes.button}>
              {tutorialSteps[activeStep].cuisine2}</Typography>
            {/* cuisine 2 */}
          </Grid>

          <Grid item xs={2.5}>
            <Typography className={classes.button}>
              {tutorialSteps[activeStep].cuisine3}</Typography>
            {/* cuisine 3 */}
          </Grid>

          <Grid item xs={1}>
            <Typography className={classes.button}> + </Typography>
            {/* more */}
          </Grid>

          <Grid item xs={12}>
            <Typography className={classes.body}>
              {tutorialSteps[activeStep].address}</Typography>
            {/* address of the restaurant */}
          </Grid>

          <Grid item xs={12}>
            {/* the stepper and dots */}
            <MobileStepper
              variant="dots"
              steps={4} // setting number of slides
              position="static"
              activeStep={activeStep}
              className={classes.root}
              nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === 3}>
                  {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>}

              backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </Button>} /> </Grid>

        </Grid>
      </Paper>

    </div>
  );
}
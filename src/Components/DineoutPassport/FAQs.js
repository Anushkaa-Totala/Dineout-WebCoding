import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: 16,
    fontFamily: 'Lato',
    color: '#3C0729',
    textAlign: 'left',
  },
  body: {
    fontSize: 14,
    fontFamily: 'Lato',
    color: '#5D1241',
    textAlign: 'left',
  },
}));

export default function FAQs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Accordion className={classes.root}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} >
          <Typography className={classes.heading}>What is Dineout Passport?</Typography> </AccordionSummary>
        <AccordionDetails >
          <Grid container spacing={0} direction="row" alignItems="left" justify="left">
            <Grid xl={12} lg={12}>
              <Typography className={classes.body}>Dineout Passport is a premium dining membership program on Dineout that offers unmatched value with:</Typography></Grid>

            <Grid xl={12} lg={12}>
              <Typography className={classes.body}>1. Minimum 25% off at 2000+ restaurants across 20 cities in India, including restaurant chain outlets and 500+ 5-star hotel restaurants</Typography>
            </Grid>

            <Grid xl={12} lg={12}> <Typography className={classes.body}>2. Access to 1+1 on Buffet offer at 200+ top restaurants</Typography></Grid>
            <Grid xl={12} lg={12}> <Typography className={classes.body}>3. Zero Convenience Fee on bill payment via Dineout Pay</Typography></Grid>
            <Grid xl={12} lg={12}> <Typography className={classes.body}>4. Access to premium events.</Typography></Grid>

          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.root}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} >
          <Typography className={classes.heading}>Do I need to make a reservation to use the Dineout Passport?</Typography> </AccordionSummary>
        <AccordionDetails >
          <Grid container spacing={0} direction="row" alignItems="left" justify="left">
            <Grid xl={12} lg={12}>
              <Typography className={classes.body}>Not at all! To take advantage of Dineout Passport, you do not not need a prior reservation. Simply walk into a Dineout Passport partner restaurant, and redeem your offer at the time of billing.</Typography></Grid></Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.root}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} >
          <Typography className={classes.heading}>Can I club other offers when I avail Dineout Passport benefits?</Typography> </AccordionSummary>
        <AccordionDetails >
          <Grid container spacing={0} direction="row" alignItems="left" justify="left">
            <Grid xl={12} lg={12}>
              <Typography className={classes.body}>Clubbing of other offers (including other Dineout offers or in-house restaurant offers) with Dineout Passport offers, is currently not allowed at a partner restaurant.</Typography></Grid></Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.root}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} >
          <Typography className={classes.heading}>Can the list of partner restaurants change after I have purchased the membership?</Typography> </AccordionSummary>
        <AccordionDetails >
          <Grid container spacing={0} direction="row" alignItems="left" justify="left">
            <Grid xl={12} lg={12}>
              <Typography className={classes.body}>Yes, the list of partner restaurants on Dineout Passport may change over time. While we work on adding more top restaurants to our network, some existing partners may also be removed temporarily owing to operational constraints at the outlet or if we've noted less-than-satisfactory service offered to our members.</Typography></Grid></Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.root}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} >
          <Typography className={classes.heading}>Is the membership refundable?</Typography> </AccordionSummary>
        <AccordionDetails >
          <Grid container spacing={0} direction="row" alignItems="left" justify="left">
            <Grid xl={12} lg={12}>
              <Typography className={classes.body}>The Dineout Passport membership is non-refundable & assures you an enjoyable time each time you use it to dine! With an assured 25% off on the bill, 1+1 offers of food & drinks, and unforgettable experiences - it's the only dining out a membership you'll ever need.</Typography></Grid></Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.root}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} >
          <Typography className={classes.heading}>On which dates is Dineout Passport not valid?</Typography> </AccordionSummary>
        <AccordionDetails >
          <Grid container spacing={0} direction="row" alignItems="left" justify="left">
            <Grid xl={12} lg={12}>
              <Typography className={classes.body}>Excluding some key public holidays and exclusions, Dineout Passport membership is valid throughout the year.Some exceptions are Christmas Eve, Christmas Day, New Year's Eve, New Year's Day and Valentine's Day. Special events, theme nights, buffets or brunches are excluded from the offer - unless specified by the restaurant.</Typography></Grid></Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.root}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} >
          <Typography className={classes.heading}>How does 1+1 buffet work?</Typography> </AccordionSummary>
        <AccordionDetails >
          <Grid container spacing={0} direction="row" alignItems="left" justify="left">
            <Grid xl={12} lg={12}>
              <Typography className={classes.body}>On purchasing a Dineout Passport, you will receive 3 coupons per Dineout Passport restaurant where 1+1 on Buffet is available.Each coupon entitles you to one complimentary buffet when another buffet is ordered of the same or higher value. You can check the offer details on the restaurant's page for restaurant-specific information.</Typography></Grid></Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.root}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} >
          <Typography className={classes.heading}>How does % off on Total Bill offer work?</Typography> </AccordionSummary>
        <AccordionDetails >
          <Grid container spacing={0} direction="row" alignItems="left" justify="left">
            <Grid xl={12} lg={12}>
              <Typography className={classes.body}>To avail % off on your total bill you need to enter the amount as shown in the bill, then select your preferred payment method and complete the payment via Dineout Pay. Discount will automatically be applied to your total bill amount.</Typography></Grid></Grid>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from '../../Assets/logo.png';
import playstore from '../../Assets/playstore.png'
import socials from '../../Assets/socials.png'
import { Divider, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    fontFamily: 'Lato',
    color: '#5D1241',
    textAlign: 'left',
    width: 350,
    fontSize: 18,
  },
  text: {
    fontFamily: 'Lato',
    textAlign: 'left',
    // width: 350,
    fontSize: 16,
    paddingTop: 10,
  },
  sub: {
    fontFamily: 'Lato',
    fontSize: 12,
    color: 'grey'
  },
  text2: {
    fontFamily: 'Lato',
    textAlign: 'left',
    // width: 350,
    paddingLeft: 100,
    paddingTop: 10,
    fontSize: 12,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction='row' >

        <Grid item lg={12}><Divider /></Grid>

        <Grid item lg={2.5}>
          <img src={logo} height='43' ></img>  <Typography className={classes.text2}> Find the best Restaurants, Deals, Discounts </Typography><Typography className={classes.text2}> and Offers!</Typography></Grid>


        <Grid item lg={2}>
          <Typography className={classes.header}> Cities</Typography>
          <Typography className={classes.text}> Mumbai</Typography>
          <Typography className={classes.text}> Delhi</Typography>
          <Typography className={classes.text}> Chennai</Typography>
          <Typography className={classes.text}> and more</Typography></Grid>


        <Grid item lg={2}>
          <Typography className={classes.header}> Discover</Typography>
          <Typography className={classes.text}> Trending</Typography>
          <Typography className={classes.text}> Dineout Pay</Typography>
          <Typography className={classes.text}> Dineout Passport</Typography>
          <Typography className={classes.text}> Super Savers</Typography></Grid>

        <Grid item lg={2}>
          <Typography className={classes.header}> About</Typography>
          <Typography className={classes.text}> Company History</Typography>
          <Typography className={classes.text}> Blogs</Typography>
          <Typography className={classes.text}> Careers</Typography>
          <Typography className={classes.text}> Customer Care</Typography></Grid>


        <Grid item lg={2} alignContent='left' alignItems='left'>
          <Typography className={classes.header}> Stay Connected</Typography>
          <img src={socials} height='90' ></img>
          <Typography className={classes.text}> Discover our app!</Typography>
          <img src={playstore} height='38' ></img></Grid>

        <Grid item lg={12}><Typography className={classes.sub}> All rights reserved@dineout.in</Typography></Grid>

      </Grid>
    </div>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DPAd from './dinoutAd';
import { Link } from 'react-router-dom';
import Banner from './banner';
import Plans from './Plans';
import DPRestaurants from './DPRestaurants';
import FAQs from './FAQs';
import Club from './Club';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
  },

}));

export default function DPGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}
        direction="row"
        alignItems="center"
        justify="center">

        <Grid item xs={12} xl={10} lg={10}></Grid><Grid item xl={10} lg={10}> <Banner /></Grid>

        <Grid item xl={10} lg={10}></Grid>

        <Grid container spacing={5}
          direction="row"
          alignItems="center"
          justify="center"><Hidden mdDown><Grid item xl={5} lg={5}> <DPAd /> </Grid> </Hidden>
          <Grid item xs={12} xl={5} lg={5}> <Plans /> </Grid> </Grid>

        <Grid item xl={10} lg={10}></Grid>

        <Hidden mdDown><Grid item xl={10} lg={10}> <DPRestaurants /> </Grid> </Hidden>
        <Grid item xl={10} lg={10}> <Club /> </Grid>

      </Grid>
    </div>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Ads from './Ads';
import Best from './BestOffers';
import Restaurants from './FeaturedRestaurants';
import SuperSavers2 from './SuperSavers';
import DPAd from './dinoutAd';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

export default function DesktopHomeGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}
        direction="row"
        alignItems="center"
        justify="center">

        <Grid item xl={11} lg={11}>  </Grid>
        <Grid item xl={11} lg={11}> <Ads /> </Grid>
        <Grid item xl={11} lg={11}> <Best /> </Grid>
        <Grid item xl={11} lg={11}> <Restaurants /> </Grid>
        <Grid item xl={11} lg={11}> <SuperSavers2 /> </Grid>
        <Grid item xl={11} lg={11}> <Link to={process.env.PUBLIC_URL + '/dineoutpassport'}><DPAd /></Link> </Grid>

      </Grid>
    </div>
  );
}
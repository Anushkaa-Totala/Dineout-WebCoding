import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BestOffers from './BestOffers';
import RestaurantsNearYou from './RestaurantsNear';
import SuperSavers from './SuperSavers';
import TopP from './TopPicks';
import PopUp from './Dialog';
import Promotionals from './Promotionals';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function HomeGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}>

        <PopUp />


        <Grid item xs={12} md={10}>
        </Grid>

        {/* adding all components sequentially in grids */}
        <Grid item xs={11}>
          <Promotionals />
        </Grid>

        <Grid item xs={11}>
          <BestOffers />
        </Grid>

        <Grid item xs={11}>
          <RestaurantsNearYou />
        </Grid>

        <Grid item xs={11}>
          <TopP />
        </Grid>

        <Grid item xs={11}>
          <SuperSavers />
        </Grid>

      </Grid>
    </div>
  );
}
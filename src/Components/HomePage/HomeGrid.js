import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BestOffers from './BestOffers';
import RestaurantsNearYou from './RestaurantsNear';
import SuperSavers from './SuperSavers';
import TopP from './TopPicks';
import PopUp from './Dialog';
import Promotionals from './Promotionals';
import LoginButton from '../LoginPage/LoginButton';
import SimpleCard from './card';

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
      container direction="row"
      justifyContent="center"
      alignItems="center">

        {/* adding all components sequentially in grids */}
        <Grid item xs={10}>
          <Promotionals />
          <PopUp />
        </Grid>

        <Grid item xs={10}>
          <BestOffers />
        </Grid>

        <Grid item xs={10}>
          <RestaurantsNearYou />
        </Grid>

        <Grid item xs={8}>
          Top Picks
          <TopP />
        </Grid>

        <Grid item xs={10}>
          <SuperSavers />
        </Grid>

     
      </Grid>
    </div>
  );
}
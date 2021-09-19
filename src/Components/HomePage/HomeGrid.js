import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BestOffers from './BestOffers';
import RestaurantsNearYou from './RestaurantsNear';
import SuperSavers from './SuperSavers';
import TopP from '../TopPicks';
import PopUp from './Dialog';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function HomeGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
 
          {/* adding all components sequentially in grids */}
        <Grid item xs={5}>
          <PopUp /> 
        </Grid>

        <Grid item xs={12}>
          <BestOffers />
        </Grid>

        <Grid item xs={12}>
          <RestaurantsNearYou />
        </Grid>

        <Grid item xs={12}>
          Top Picks 
          <TopP />
        </Grid>

        <Grid item xs={12}>
          <SuperSavers />
        </Grid>

      </Grid>
    </div>
  );
}
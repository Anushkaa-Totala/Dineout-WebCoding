import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';

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

export default function BasicGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
          
        <Grid item md ={3} xs={12}>
         <Hidden xsDown>
          <Paper className={classes.paper}>The logo, spanning 1 of 3</Paper>
          </Hidden>
         </Grid>
               

        <Grid item md={9}xs={12}>
          <Paper className={classes.paper}>The navigation, spanning 2 of 3</Paper>
        </Grid>

        <Grid item md={12}xs={12}>
          <Paper className={classes.paper}>The carousel, spanning 3 of 3</Paper>
        </Grid>

        <Grid item md={4}xs={12}>
          <Paper className={classes.paper}>Feature, spanning 1 of 3</Paper>
        </Grid>

        <Grid item md={4}xs={12}>
          <Paper className={classes.paper}>Feature, spanning 1 of 3</Paper>
        </Grid>

        <Grid item md={4}xs={12}>
          <Paper className={classes.paper}>Feature, spanning 1 of 3</Paper>
        </Grid>

        <Grid item md={12}xs={12}>
          <Paper className={classes.paper}>The footer, spanning 3 of 3</Paper>
        </Grid>

        
      </Grid>
    </div>
  );
}

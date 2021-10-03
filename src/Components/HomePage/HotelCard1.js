import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: 'left',
    color: 'black',
  },
  button: {
    color: 'white',
    backgroundColor: 'purple',
    fontSize: 10,
    size: 'small',
    variant: 'contained',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
  },
  pos: {
    marginBottom: 10,
    fontSize: 15,
    textAlign: 'left',
  },
});

export default function HotelCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (

      <Grid container
                spacing={1.8}
                direction="row"
                justify="flex-start"
                alignItems="flex-start">
          
          <Grid item xs={12}></Grid>

          <Grid item xs={4}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Pop Tates
            </Typography>
          </Grid>


              <Grid item xs={2}>
                <Button className={classes.button}>Mexican</Button>
              </Grid>

              <Grid item xs={2}>
                <Button className={classes.button} >Italian</Button>
              </Grid>

              <Grid item xs={2}>
                <Button className={classes.button}>Chinese</Button>
              </Grid>

              <Grid item xs={2}>
                <IconButton size='small' className={classes.button}> <AddIcon /> </IconButton>
              </Grid>


          <Grid item xs={12}>
          <Typography className={classes.pos} color="textSecondary">
            101, Andheri Lokhandwala, Andheri West.
          </Typography>
</Grid>

      </Grid>

   
  );
}

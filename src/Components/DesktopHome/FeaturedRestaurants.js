import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import { Typography, Grid } from '@material-ui/core';
import Finch from './Restaurant Cards/finch'
import EpisodeOne from './Restaurant Cards/EpisodeOne'
import JMLW from './Restaurant Cards/JMLW';
import PopTates from './Restaurant Cards/PopTates';
import Bistro from './Restaurant Cards/Bistro';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  header: {
    fontFamily: 'Lato',
    paddingLeft: theme.spacing(2),
    fontSize: 22,
    textAlign: 'left',
  },
  imageList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
}));



export default function Restaurants() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid container spacing={1}
        direction="row"
        alignContent="center"
        alignItems="center">

        <Grid item xs={8}>
          <Typography className={classes.header}> Restaurants Near You </Typography>
          {/* header of the caraousel */}</Grid>

        <Grid item xs={12} lg={12}>
          <ImageList className={classes.imageList} cols={3.8} gap={25} cellHeight='auto'>

            <ImageListItem >
              <PopTates />
            </ImageListItem>

            <ImageListItem >
              <Finch />
            </ImageListItem>

            <ImageListItem >
              <EpisodeOne />
            </ImageListItem>

            <ImageListItem >
              <JMLW />
            </ImageListItem>

            <ImageListItem >
              <Bistro />
            </ImageListItem>


          </ImageList>

        </Grid>

      </Grid>

    </div>
  );
}
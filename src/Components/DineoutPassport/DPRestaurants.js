import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import { Typography, Grid } from '@material-ui/core';
import PopTates from '../DesktopHome/Restaurant Cards/PopTates';
import Shizuan from '../DesktopHome/Restaurant Cards/Shizuan';
import Bistro from '../DesktopHome/Restaurant Cards/Bistro';
import Zyutun from '../DesktopHome/Restaurant Cards/Zyutun';
import Saptami from '../DesktopHome/Restaurant Cards/Saptami';

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



export default function DPRestaurants() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid container spacing={1}
        direction="row"
        alignContent="center"
        alignItems="center">

        <Grid item xs={8}>
          <Typography className={classes.header}>Dineout Passport Restaurants </Typography>
          {/* header of the caraousel */}</Grid>

        <Grid item xs={12} lg={12}>
          <ImageList className={classes.imageList} cols={3.8} gap={25} cellHeight='auto'>

            <ImageListItem >
              <Shizuan />
            </ImageListItem>

            <ImageListItem >
              <Bistro />
            </ImageListItem>

            <ImageListItem >
              <Saptami />
            </ImageListItem>

            <ImageListItem >
              <Zyutun />
            </ImageListItem>

            <ImageListItem >
              <PopTates />
            </ImageListItem>


          </ImageList>

        </Grid>

      </Grid>

    </div>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import { Typography, Grid } from '@material-ui/core';
import RecipeReviewCard from './card';
import PopTates from './Restaurant Cards/PopTates';
import Oozo from './Restaurant Cards/Oozo';
import Saptami from './Restaurant Cards/Saptami';
import Zyutun from './Restaurant Cards/Zyutun';
import Shizuan from './Restaurant Cards/Shizuan';

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



export default function SuperSavers2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid container spacing={1}
        direction="row"
        alignContent="center"
        alignItems="center">

        <Grid item xs={8}>
          <Typography className={classes.header}> Super Savers </Typography>
          {/* header of the caraousel */}</Grid>

        <Grid item xs={12} lg={12}>
          <ImageList className={classes.imageList} cols={3.8} gap={25} cellHeight='auto'>

            <ImageListItem >
              <Oozo />
            </ImageListItem>

            <ImageListItem >
              <Saptami />
            </ImageListItem>

            <ImageListItem >
              <Zyutun />
            </ImageListItem>

            <ImageListItem >
              <Shizuan />
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
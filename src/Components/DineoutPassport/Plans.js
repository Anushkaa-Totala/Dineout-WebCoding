import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import image from '../../Assets/Plan1.png'
import image2 from '../../Assets/Plan2.png'
import image3 from '../../Assets/Plan3.png'
import image4 from '../../Assets/Plan4.png'
import { Typography, Grid, Button } from '@material-ui/core';

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

//adding all the images from desktop as constants
const itemData = [
  {
    img: image,
  },
  {
    img: image2,
  },
  {
    img: image3,
  },
  {
    img: image4,
  },
];

export default function Plans() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid container spacing={2}
        direction="row"
        alignContent="left"
        alignItems="left">

        <Grid item xs={8}>
          <Typography className={classes.header}> Plans </Typography>
          {/* header of the caraousel */}</Grid>

        <Grid item xs={4}>
          <Typography className={classes.header}> see all </Typography>
          {/* header of the caraousel */}</Grid>

        <Grid item xs={12} md={12} lg={12}>
          <ImageList className={classes.imageList} cols={2} gap={20} rowHeight='auto'>
            {itemData.map((item) => (
              //add images to the list
              <ImageListItem key={item.img}>
                <Button><img src={item.img} height={302} width={237} /></Button>
              </ImageListItem>))} </ImageList>
        </Grid>

      </Grid>

    </div>
  );
}
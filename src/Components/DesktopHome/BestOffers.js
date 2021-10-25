import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import image from '../../Assets/best1.png'
import image2 from '../../Assets/best2.png'
import image3 from '../../Assets/best3.png'
import image4 from '../../Assets/best4.png'
import { Typography, Grid } from '@material-ui/core';

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

export default function Best() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid container spacing={2}
        direction="row"
        alignContent="left"
        alignItems="left">

        <Grid item xs={8}>
          <Typography className={classes.header}> Best Offers </Typography>
          {/* header of the caraousel */}</Grid>

        <Grid item xs={12} md={12} lg={12}>
          <ImageList className={classes.imageList} cols={4} gap={20} cellHeight={278}>
            {itemData.map((item) => (
              //add images to the list
              <ImageListItem key={item.img}>
                <img src={item.img} />
              </ImageListItem>))} </ImageList>
        </Grid>

      </Grid>

    </div>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import image from '../Assets/TopPick1.png'
import image2 from '../Assets/TopPick2.png'
import image3 from '../Assets/TopPick3.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',

  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
}));

//adding all the images from desktop as constants
const itemData = [
  {
    img: image,
  },
];
const itemData2 = [
  {
    img2: image2,
  },
];
const itemData3 = [
  {
    img3: image3,
  },
];



export default function TopP() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2.5}>
        {itemData.map((item) => (
          //add images to the list
          <ImageListItem key={item.img}>
            <img src={item.img} />
          </ImageListItem>
        ))}
        {itemData2.map((item) => (
          <ImageListItem key={item.img2}>
            <img src={item.img2} />
          </ImageListItem>
        ))}

        {itemData3.map((item) => (
          <ImageListItem key={item.img3}>
            <img src={item.img3} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
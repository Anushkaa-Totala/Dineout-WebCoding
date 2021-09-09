import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Home" value="home" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Book a Table" value="bookatable" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Dineout Passport" value="dineoutpassport" icon={<LocationOnIcon />} />
      <BottomNavigationAction label="Dineout Pay" value="dineoutpay" icon={<FolderIcon />} />
      <BottomNavigationAction label="Community" value="community" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}

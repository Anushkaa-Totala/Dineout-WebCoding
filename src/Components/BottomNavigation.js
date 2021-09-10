import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import RestaurantMenuOutlinedIcon from '@material-ui/icons/RestaurantMenuOutlined';

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
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Book a Table" value="bookatable" icon={<RestaurantMenuOutlinedIcon />} />
      <BottomNavigationAction label="Dineout Passport" value="dineoutpassport" icon={<LocationOnIcon />} />
      <BottomNavigationAction label="Dineout Pay" value="dineoutpay" icon={<AccountBalanceWalletOutlinedIcon />} />
      <BottomNavigationAction label="Community" value="community" icon={<PeopleAltOutlinedIcon />} />
    </BottomNavigation>
  );
}

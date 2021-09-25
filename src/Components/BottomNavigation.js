import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import RestaurantMenuOutlinedIcon from '@material-ui/icons/RestaurantMenuOutlined';
import Grid from '@material-ui/core/Grid';

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

    <Grid container spacing={0.8}>
    <BottomNavigation value={value} onChange={handleChange} className={classes.root} >
      

        <Grid item xs={2}>
        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
        </Grid>
        
        <Grid item xs={2}>
        <BottomNavigationAction label="Book a Table" value="bookatable" icon={<RestaurantMenuOutlinedIcon />} />
        </Grid>

        <Grid item xs={2}>
        <BottomNavigationAction label="Dineout Passport" value="dineoutpassport" icon={<LocationOnIcon />} />
        </Grid>

        <Grid item xs={2}>
        <BottomNavigationAction label="Dineout Pay" value="dineoutpay" icon={<AccountBalanceWalletOutlinedIcon />} />
        </Grid>

        <Grid item xs={2}>
        <BottomNavigationAction label="Community" value="community" icon={<PeopleAltOutlinedIcon />} />
        </Grid>

      </BottomNavigation>
      </Grid>
  )
};

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '../Assets/Home.png'
import BookATable from '../Assets/BookATable.png'
import DineoutPassport from '../Assets/DineoutPassport.png'
import HomeInactive from '../Assets/HomeInactive.png'
import DineoutPay from '../Assets/DineoutPay.png'
import Community from '../Assets/Community.png'
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: 80,
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (


    <BottomNavigation value={value} onChange={handleChange} className={classes.root} >

      <BottomNavigationAction label="Home" value="home" icon={<IconButton>
        <img src={Home} height={50} width={56} />
      </IconButton>} />

      <BottomNavigationAction label="Reservation" value="bookatable" icon={<IconButton>
        <img src={BookATable} height={45} width={45} />
      </IconButton>} />

      <BottomNavigationAction label="Dineout Passport" value="dineoutpassport" icon={<IconButton>
        <img src={DineoutPassport} height={43} width={36} />
      </IconButton>} />

      <BottomNavigationAction label="Dineout Pay" value="dineoutpay" icon={<IconButton>
        <img src={DineoutPay} height={40} width={40} />
      </IconButton>} />

      <BottomNavigationAction label="Community" value="community" icon={<IconButton>
        <img src={Community} height={35} width={50} />
      </IconButton>} />

    </BottomNavigation>
  )
};

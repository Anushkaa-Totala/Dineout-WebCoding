import Home from '../Assets/Home.png'
import BookATable from '../Assets/BookATable.png'
import DineoutPassport from '../Assets/DineoutPassport.png'
import HomeInactive from '../Assets/HomeInactive.png'
import DineoutPay from '../Assets/DineoutPay.png'
import Community from '../Assets/Community.png'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { IconButton } from '@material-ui/core';


const useStyles = makeStyles({
  // root: {
  //   width: 500,
  // },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation position="fixed"
      bottom="0"

      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);

      }}
    >
      {/* all icons declared and named */}
      <BottomNavigationAction label="Home" icon={<IconButton >
        <img src={Home} height={35} width={40} />
      </IconButton>} />

      <BottomNavigationAction label="Table" icon={<IconButton>
        <img src={BookATable} height={40} width={50} />
      </IconButton>} />

      <BottomNavigationAction label="DP" icon={<IconButton>
        <img src={DineoutPassport} height={40} width={40} />
      </IconButton>} />

      <BottomNavigationAction label="Payment" icon={<IconButton>
        <img src={DineoutPay} height={45} width={45} />
      </IconButton>} />

      <BottomNavigationAction label="Community" icon={<IconButton>
        <img src={Community} height={40} width={50} />
      </IconButton>} />

    </BottomNavigation>
  );
}

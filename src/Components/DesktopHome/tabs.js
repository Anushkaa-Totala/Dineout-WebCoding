import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    paddingLeft: 200,
    paddingTop: 15,
  },
});

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
      >

        <Tab label="Home" to='/Dineout-WebCoding/home' component={Link} />
        <Tab label="Book A Table" />
        <Tab label="Dineout Pay" />
        <Tab label="Dineout Passport" to='/Dineout-WebCoding/dineoutpassport' component={Link} />
        <Tab label="Community" />
      </Tabs>
    </Paper>
  );
}

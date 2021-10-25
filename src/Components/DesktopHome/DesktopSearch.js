import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import logo from '../../Assets/dineout.png';
import star from '../../Assets/Star.png';
import settings from '../../Assets/settings.png';
import reva from '../../Assets/reva.png';
import location from '../../Assets/location.png';
import search from '../../Assets/search.png';
import { Button, Grid } from '@material-ui/core';
import LoginBox from './Login';
import SignUpBox from './SignUp';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#F2635C',
  },
  button: {
    fontFamily: 'Lato',
    background: 'white',
    border: 0,
    borderRadius: 15,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: '#FE6B8B',
    height: 45,
    padding: '0 30px',
  },
  search: {
    color: '#E1514A',
    position: 'relative',
    borderRadius: 12,
    borderColor: '#EDA803',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
      color: 'white',
    },
  },
  inputInput: {
    borderColor: '#EDA803',
    padding: theme.spacing(1, 1, 1, 0),
    background: '#FFFFFF',
    borderRadius: 12,
    paddingLeft: `calc(1em + ${theme.spacing(0)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '14ch',
      '&:focus': {
        width: '22ch',
      },
    },
  },
}));

export default function DesktopSearch() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar className={classes.root}>

          <Grid container spacing={0.1}
            direction="row"
            alignItems="center"
            justify="center">

            <Grid xl={12} lg={12}></Grid>

            <Grid xl={0.5} lg={0.5}>
              <IconButton> <img src={location}></img> </IconButton></Grid>

            <Grid xl={2.5} lg={2.5}>
              <img src={logo} /></Grid>

            <Grid xl={3} lg={3}></Grid>

            <Grid xl={2.5} lg={2.5}>
              <div className={classes.search}> <InputBase borderColor='#EDA803' placeholder="Search in City" classes={{ input: classes.inputInput, }}></InputBase>
                <IconButton> <img src={search} /></IconButton> </div></Grid>

            <Grid xl={1} lg={0.5}>

              <IconButton> <img src={star} /> </IconButton></Grid>

            <Grid xl={1} lg={0.5}>
              <IconButton> <img src={settings} /> </IconButton></Grid>

            <Grid xl={1} lg={1}>
              <LoginBox /></Grid>

            <Grid xl={2} lg={2}>
              <SignUpBox /></Grid>

          </Grid>

        </Toolbar>
      </AppBar>
    </div>
  );
}

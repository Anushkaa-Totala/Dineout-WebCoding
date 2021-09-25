import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/Toolbar'
import {Link, Router} from "react-router-dom";
import logo from './../Assets/logo.png';
import { AccessAlarm } from '@material-ui/icons';
import { Button } from '@material-ui/core';

export default function ButtonAppBar() {
  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar>
            <Link to={process.env.PUBLIC_URL + '/home'}>
                <IconButton>
                    <img src={logo} className="App-logo" alt="logo" />
                </IconButton>
                
            </Link>

            <Link to={process.env.PUBLIC_URL + '/login'}>
                <Button>
                  Link trial4
                </Button>
                
            </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
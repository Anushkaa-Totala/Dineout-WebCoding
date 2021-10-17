import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#F2635C',
  },
  AccButton: {
    marginRight: theme.spacing(2),
    color: 'white',
  },
  search: {
    color: '#E1514A',
    position: 'relative',
    borderRadius: 12,
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
  searchIcon: {
    color: '#E1514A',
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputInput: {
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

export default function SearchBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar className={classes.root}>

          <Link to={process.env.PUBLIC_URL + '/home'}>
            <IconButton>
              <ArrowBackIosIcon />
            </IconButton>
          </Link>

          <div className={classes.search}>

            <InputBase
              placeholder="Search City"
              classes={{ input: classes.inputInput, }}></InputBase>
            <IconButton> <SearchIcon className={classes.searchIcon} /></IconButton>

          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

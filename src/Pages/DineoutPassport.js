import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LabelBottomNavigation from '../Components/BottomNavigation';
import SearchAppBar from '../Components/SearchAppBar';
import { Hidden } from '@material-ui/core';
import DPGrid from '../Components/DineoutPassport/DPGrid'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350, //setting the width of the box
    flexGrow: 1,
    fontFamily: 'Lato',
  },

}));


export default function Home() {
  const classes = useStyles();
  const theme = useTheme();

  return (

    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
        <Hidden mdUp>  <SearchAppBar /> </Hidden>
      </header>

      <Container>
        <React.Fragment>
          <DPGrid />
        </React.Fragment>
      </Container>

      <footer className="App-footer" position="sticky ">
        <Hidden mdUp>
          <LabelBottomNavigation /> </Hidden>
      </footer>
    </div>
  );
}
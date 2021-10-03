import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import HomeGrid from '../Components/HomePage/HomeGrid';
import LabelBottomNavigation from '../Components/BottomNavigation';
import SearchAppBar from '../Components/SearchAppBar';

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
        <SearchAppBar />
      </header>

      <Container>
        <React.Fragment>
          <HomeGrid className={classes.root} />
        </React.Fragment>
      </Container>

      <footer className="App-footer" position="sticky ">
        <LabelBottomNavigation />
      </footer>
    </div>
  );
}
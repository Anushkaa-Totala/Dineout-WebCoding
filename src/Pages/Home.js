import React from 'react';
import Container from '@material-ui/core/Container';
import HomeGrid from '../Components/HomePage/HomeGrid';
import PrimarySearchAppBar from '../Components/AppBarSearch';
import LabelBottomNavigation from '../Components/BottomNavigation';
import { Box } from '@material-ui/core';


export default function Home() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
       <PrimarySearchAppBar/>
      </header>

    <React.Fragment>
      <Container maxWidth="sm">
         <HomeGrid/>
      </Container>
    </React.Fragment>
<Box/>
    <footer className="App-footer">
        <LabelBottomNavigation/>
      </footer>
    </div>
  );
}
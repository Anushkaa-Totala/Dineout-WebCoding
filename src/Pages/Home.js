import React from 'react';
import Container from '@material-ui/core/Container';
import HomeGrid from '../Components/HomePage/HomeGrid';
import PrimarySearchAppBar from '../Components/AppBarSearch';
import LabelBottomNavigation from '../Components/BottomNavigation';



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
    <footer className="App-footer">
        <LabelBottomNavigation/>
      </footer>
    </div>
  );
}
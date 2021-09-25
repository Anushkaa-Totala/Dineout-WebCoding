import React from 'react';
import Container from '@material-ui/core/Container';
import HomeGrid from '../Components/HomePage/HomeGrid';
import PrimarySearchAppBar from '../Components/AppBarSearch';
import LabelBottomNavigation from '../Components/BottomNavigation';
import BottomNavigation from '../Components/Menu/BottomNav2';
import NavNext from '../Components/Menu/BottomNav2';


export default function Home() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
       <PrimarySearchAppBar/>
      </header>

    <React.Fragment>
     
         <HomeGrid/>
 
    </React.Fragment>

    <footer className="App-footer" position= "sticky ">
        {/* <LabelBottomNavigation/> */}
        <NavNext/>
      </footer>
    </div>
  );
}
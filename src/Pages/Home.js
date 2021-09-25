import React from 'react';
import Container from '@material-ui/core/Container';
import HomeGrid from '../Components/HomePage/HomeGrid';
import LabelBottomNavigation from '../Components/BottomNavigation';
import BottomNavigation from '../Components/Menu/BottomNav2';
import NavNext from '../Components/Menu/BottomNav2';
import ButtonAppBar from '../Components/AppBar';
import SearchAppBar from '../Components/SearchAppBar';
import { Button } from '@material-ui/core';
import { Link, Router } from "react-router-dom";

export default function Home() {
  return (

    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
        {/* <SearchAppBar/> */}
        <ButtonAppBar />
        
        <Link to={process.env.PUBLIC_URL + '/login'}>
          <Button>
            Link trial3
          </Button>

        </Link>
      </header>
      <Container>
        <React.Fragment>

          <Link to={process.env.PUBLIC_URL + '/login'}>
            <Button>
              Link trial2
            </Button>
          </Link>

          <HomeGrid />

        </React.Fragment>
      </Container>
      <footer className="App-footer" position="sticky ">
        {/* <LabelBottomNavigation/> */}
        <NavNext />
      </footer>
    </div>
  );
}
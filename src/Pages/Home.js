import React from 'react';
import Container from '@material-ui/core/Container';
import HomeGrid from '../Components/HomePage/HomeGrid';

export default function Home() {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
         <HomeGrid/>
      </Container>
    </React.Fragment>
  );
}
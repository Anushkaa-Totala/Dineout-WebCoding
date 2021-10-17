import React from 'react';
import Container from '@material-ui/core/Container';
import SignUpGrid from '../Components/SignUpPage/SignUpGrid';



export default function Home() {
  return (
    <React.Fragment>
      <Container>
        <SignUpGrid />
      </Container>
    </React.Fragment>
  );
}
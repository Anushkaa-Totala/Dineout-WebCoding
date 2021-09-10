import React from 'react';
import Container from '@material-ui/core/Container';
import SingleLineImageList from './Components/SingleLineImageList';

export default function Home() {
  return (
    <React.Fragment>
        <Container>
            <p>
                Welcome to your web application. Make something beautiful!
            </p>
                     
          <SingleLineImageList/>

         </Container>
    </React.Fragment>
  );
}
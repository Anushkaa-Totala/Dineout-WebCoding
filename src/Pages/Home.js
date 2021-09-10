import React from 'react';
import Container from '@material-ui/core/Container';
import SwipeableTextMobileStepper from '../Components/Carasouel';
import SimpleBackdrop from '../Components/PopUp';


export default function Home() {
  return (
    <React.Fragment>
        <Container>

        <SimpleBackdrop/> 

            <p>
                Welcome to your web application. Make something beautiful!
            </p>
             <SwipeableTextMobileStepper/> 

             <p>
            Best Offers
            </p>     
            <SwipeableTextMobileStepper/> 

            <p>
            Restaurants Near You
            </p>     
            <SwipeableTextMobileStepper/> 

            <p>
            Top Picks
            </p>     
             

            <p>
            Super Savers
            </p>     
            <SwipeableTextMobileStepper/>
      
           
         </Container>
    </React.Fragment>
  );
}
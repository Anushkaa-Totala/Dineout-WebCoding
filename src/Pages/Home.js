import React from 'react';
import Container from '@material-ui/core/Container';
import SwipeableTextMobileStepper from '../Components/Carasouel';
import SimpleBackdrop from '../Components/PopUp';
import SingleLineImageList from '../Components/SingleLineImage';


export default function Home() {
  return (
    <React.Fragment>
        <Container>

             <p>
                Welcome to your web application. Make something beautiful!
            </p>

            <SimpleBackdrop/>
            
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
             <SingleLineImageList/>

            <p>
            Super Savers
            </p>     
            <SwipeableTextMobileStepper/>
      
           
         </Container>
    </React.Fragment>
  );
}
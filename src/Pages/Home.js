import React from 'react';
import Container from '@material-ui/core/Container';
import DatePickers from '../Components/HomeCard/DateTimePicker';
import ContainedButtons from '../Components/Buttons';
import SimpleCard from '../Components/HomeCard/HomeMultiCard';
import TextMobileStepper from '../Components/SwipeableText';

export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
            <p>
                Welcome to your web application. Make something beautiful!
            </p>
         </Container>
         <SimpleCard/>
         <TextMobileStepper/>
        <ContainedButtons/>
    </React.Fragment>
  );
}
import React from 'react';
import Container from '@material-ui/core/Container';
import ContainedButtons from '../Components/Buttons and Input/Buttons';
import SimpleCard from '../Components/HomeCard/HomeMultiCard';
import BasicButtonGroup from '../Components/Buttons and Input/ButtonGroup';
import Checkboxes from '../Components/Buttons and Input/Checkboxes';
import FloatingActionButtons from '../Components/Buttons and Input/FloatingAction';
import MaterialUIPickers from '../Components/DateMaterialUI.js';
import SwipeableTextMobileStepper from '../Components/Images';
import ActiveLastBreadcrumb from '../Components/BreadcrumMenu';
import RadioButtonsGroup from '../Components/Buttons and Input/RadioButtons';
import CustomizedRadios from '../Components/Buttons and Input/CustomRadio';
import CircularIndeterminate from '../Components/ProgressBar';


export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
            <p>
                Welcome to your web application. Make something beautiful!
            </p>
            <ActiveLastBreadcrumb/>
            <SimpleCard/>
            <SwipeableTextMobileStepper/>
            <BasicButtonGroup/>
            <RadioButtonsGroup/>
            <Checkboxes/>
            <FloatingActionButtons/>
            <CustomizedRadios/>
            <CircularIndeterminate/>
            <MaterialUIPickers/>
            <ContainedButtons/>
         </Container>
    </React.Fragment>
  );
}
import React from 'react';
import Container from '@material-ui/core/Container';
import BasicButtonGroup from '../Components/Buttons/ButtonGroup';
import ContainedButtons from '../Components/Buttons/Buttons';
import NameTextFields from '../Components/InputFields/NameInputText';
import NumTextFields from '../Components/InputFields/NumberInputText copy';
import CustomizedSteppers from '../Components/Stepper';

export default function Home() {
  return (
    <React.Fragment>
      <Container>
        <p>
          SIGNUP
        </p>
        <CustomizedSteppers />
      </Container>
    </React.Fragment>
  );
}
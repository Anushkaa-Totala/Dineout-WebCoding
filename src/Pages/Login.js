import React from 'react';
import Container from '@material-ui/core/Container';
import BasicButtonGroup from '../Components/Buttons/ButtonGroup';
import NameTextFields from '../Components/InputFields/NameInputText';
import NumTextFields from '../Components/InputFields/NumberInputText copy';
import CustomizedSnackbars from '../Components/SuccessSnackbar';


export default function Home() {
    return (
      <React.Fragment>
          <Container>
              <p>
                  LOGIN
              </p>
            <NameTextFields/>
            <NumTextFields/>
              <p>
               OR Sign in with
                </p>
              <BasicButtonGroup/>
              <CustomizedSnackbars/>
                       </Container>
                       
      </React.Fragment>
    );
  }
import React from 'react';
import Container from '@material-ui/core/Container';
import LoginButton from '../Components/Buttons/LoginButton';
import SignUpButton from '../Components/Buttons/SignUpButton';
import ButtonGroup from '../Components/Buttons/ButtonGroup';
import InsetDividers from '../Components/InsetDividers';


export default function Home() {
    return (
      <React.Fragment>
          <Container>
              <p>
                  MENU
              </p>
              <LoginButton/>

              <p>
                OR
              </p>

              <SignUpButton/>
              <ButtonGroup/>

              <InsetDividers/>

                       </Container>
      </React.Fragment>
    );
  }
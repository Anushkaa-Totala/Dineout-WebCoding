import React from 'react';
import Container from '@material-ui/core/Container';
import LoginGrid from '../Components/LoginPage/LoginGrid';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


export default function Home() {
  return (
    <React.Fragment>
      <Container>
        <AccessAlarmIcon/>
<LoginGrid/>
<ExitToAppIcon/>

      </Container>

    </React.Fragment>
  );
}
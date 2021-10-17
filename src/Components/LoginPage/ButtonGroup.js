import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import google from '../../Assets/google.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function BasicButtonGroup() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* adding the button group for two shortcut login options */}
      <ButtonGroup variant="outlined" color="primary" aria-label="contained primary button group">
        <Button> <img src={google} height={40}/> </Button>
  
        <Button><FacebookIcon height={80}/> </Button>
      </ButtonGroup>
    </div>
  );
}

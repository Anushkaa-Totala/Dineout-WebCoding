import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import google1 from '../../Assets/google1.jpg'
import facebook2 from '../../Assets/FacebookIcon.jpg'

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
        <Button> <img src={google1} height={40} /> </Button>
        <Button> <img src={facebook2} height={40} /> </Button>
      </ButtonGroup>
    </div>
  );
}

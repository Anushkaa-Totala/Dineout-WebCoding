import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import BasicButtonGroup from '../LoginPage/ButtonGroup'
import { Typography } from '@material-ui/core';
import NumberInput from '../LoginPage/NumberInput';
import PasswordInput from '../LoginPage/PasswordInput';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    fontFamily: 'Lato',
    background: 'white',
    border: 0,
    borderRadius: 15,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: '#F1645B',
    height: 45,
    padding: '0 30px',
  },
  button2: {
    fontFamily: 'Lato',
    color: 'white',
    border: 0,
    borderRadius: 15,
    backgroundColor: '#F1645B',
    height: 45,
  },
  text: {
    fontFamily: 'Lato',
    textAlign: 'center',
    width: 350,
    fontSize: 18,
  },
  instruc: {
    font: 'Lato',
    fontSize: 12,
    color: '#707070'
  },
  instruc2: {
    font: 'Lato',
    fontSize: 10,
    color: '#707070'
  },
}));

export default function LoginBox() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className={classes.root}>
      <Button className={classes.button} onClick={handleClickOpen}>LOGIN
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Grid container spacing={2} direction="column"
          alignItems="center"
          justify="center">
          {/* adding all components sequentially in grids */}

          <Grid item lg={12}>
            <Typography className={classes.text} >LOGIN </Typography></Grid>

          <Grid item lg={12}><Typography className={classes.instruc}> Enter details </Typography></Grid>

          <Grid item lg={12}> <NumberInput /></Grid>

          <Grid item lg={12}><PasswordInput /></Grid>

          <Grid item lg={12}> <Typography className={classes.instruc2}> forgot password? </Typography></Grid>

          <Grid item lg={12}></Grid>

          <Grid item lg={12}> <Button onClick={handleClose} className={classes.button2}>
            Cancel
          </Button> <Button onClick={handleClose} className={classes.button2}>
              Login
            </Button></Grid>



          <Grid item lg={12}>

            <Typography className={classes.instruc}> OR SIGN IN WITH </Typography></Grid>

          <Grid item lg={12}>
            <BasicButtonGroup /></Grid>

        </Grid>
      </Dialog>
    </div>
  );
}

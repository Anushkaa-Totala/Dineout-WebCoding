import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import StepForm from '../SignUpPage/Form2'
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

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

export default function SignUpBox() {
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
      <Button className={classes.button} onClick={handleClickOpen}>SIGN UP
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Grid container spacing={1} direction="row"
          alignItems="center"
          justify="center">
          {/* adding all components sequentially in grids */}

          <Grid item lg={9}></Grid>

          <Grid item lg={1}> <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
            <Close />
          </IconButton></Grid>

          <Grid item lg={12}>
            <StepForm /></Grid>

          <Grid item lg={12}> <Link to={process.env.PUBLIC_URL + '/home'}><Typography className={classes.instruc2}>already have an account? Login here </Typography></Link></Grid>

        </Grid>
      </Dialog>
    </div>
  );
}

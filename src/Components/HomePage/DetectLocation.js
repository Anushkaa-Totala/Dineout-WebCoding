import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Lato',
    color: '#5C284F',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
    fontFamily: 'Lato',
    color: '#5C284F',
  },
  fabProgress: {
    position: 'fixed',
    top: "center",
    left: "center",
    zIndex: 1,
    fontFamily: 'Lato',
    color: '#5C284F',
  },
  button: {
    fontFamily: 'Lato',
    color: '#F2635C',
    borderRadius: 16,
    borderColor: '#F2635C',
    // minHeight: '180',
    maxHeight: '180',
  },
}));

export default function Loading() {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const button = clsx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Button
          aria-label="save"
          className={classes.button}
          onClick={handleButtonClick} variant='outlined'>
          {success ? <Button className={classes.button}><CheckIcon /></Button> : <Button className={classes.button}>detect</Button>}
        </Button>
        {loading && <CircularProgress size={40} className={classes.fabProgress} />}

      </div>
    </div>
  );
}

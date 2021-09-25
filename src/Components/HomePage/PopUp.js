import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SimpleCard from './HomeCard/HomeMultiCard';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function SimpleBackdrop() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(true);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
    
      
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        {/* <SimpleCard /> */}
        {/* dialogue box */}
      </Backdrop>
    </div>
  );
}

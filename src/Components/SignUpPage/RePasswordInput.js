import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { InputLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '25ch',
    border: 4,

    '& .MuiOutlinedInput-root': {  // - The Input-root, inside the TextField-root
      '& fieldset': {            // - The <fieldset> inside the Input-root
        borderColor: '#C4AC83',
      },
      '&:hover fieldset': {
        borderColor: '#5C284F', // - Set the Input border when parent has :hover
      },
      '&.Mui-focused fieldset': { // - Set the Input border when parent is focused 
        borderColor: '#5C284F',
      },
    },
  },
}));

export default function PasswordInput() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      {/* <TextField id="Password" label="Password" variant="outlined" type="password" class="validate invalid" required="" className={classes.text}  /> */}
      <TextField id="Name" label="Type Password Again" variant="outlined" type="password" classes={classes} />
    </form>
  );
}

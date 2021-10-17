import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { InputLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: { 
      margin: theme.spacing(1),
      width: '25ch',
      width: '25ch',
      border: 4,
      
        '& .MuiOutlinedInput-root': {  // - The Input-root, inside the TextField-root
            '& fieldset': {            // - The <fieldset> inside the Input-root
                borderColor: '#5C284F',   // - Set the Input border
            },
            '&:hover fieldset': {
                borderColor: '#5C284F', // - Set the Input border when parent has :hover
            },
            '&.Mui-focused fieldset': { // - Set the Input border when parent is focused 
                borderColor: '#F2635C',
            },
        },
  },
  text:{
fontFamily: 'Lato',
position: 'relative',
  },
}));

export default function RePassInput() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <TextField id="Password" label="Type Password Again" variant="outlined" type="password" className={classes.root}  />
</form>
  );
}

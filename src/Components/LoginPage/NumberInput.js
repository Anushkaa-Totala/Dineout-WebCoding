import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',

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
  },
}));

export default function NumberInput() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="Name" label="Phone Number/Email" variant="outlined" />
      {/* adding the input field */}
    </form>
  );
}

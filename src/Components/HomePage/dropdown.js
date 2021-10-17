import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
    fontFamily: 'Lato',
    color: '#5C284F',
    backgroundColor: '#5C284F'
  },
  formControl: {
    margin: theme.spacing(3),
    minWidth: 200,
    fontFamily: 'Lato',
    color: '#5C284F',
    borderColor: '#5C284F',
  },
  option: {
    fontFamily: 'Lato',
    color: '#5C284F',
    border: '',    
    borderColor: '#5C284F',
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.option} id="demo-controlled-open-select-label">Select City</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
          className={classes.option}
        >

          <MenuItem value={10} className={classes.option}>Delhi</MenuItem>
          <MenuItem value={20} className={classes.option}>Pune</MenuItem>
          <MenuItem value={30} className={classes.option}>Ahemdabad</MenuItem>
          <MenuItem value={40} className={classes.option}>Kolkatta</MenuItem>
          <MenuItem value={50} className={classes.option}>Chennai</MenuItem>

        </Select>
      </FormControl>

    </div>
  );
}

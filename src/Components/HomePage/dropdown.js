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
  },
  formControl: {
    margin: theme.spacing(3),
    minWidth: 200,
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
      <FormControl className= {classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Select City</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >

          <MenuItem value={10}>Delhi</MenuItem>
          <MenuItem value={20}>Pune</MenuItem>
          <MenuItem value={30}>Ahemdabad</MenuItem>
          <MenuItem value={40}>Kolkatta</MenuItem>
          <MenuItem value={50}>Chennai</MenuItem>

        </Select>
</FormControl>


      {/* <Button className={classes.button} onClick={handleOpen}>
        Select Location
      </Button> */}

    </div>
  );
}

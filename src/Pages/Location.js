import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import SearchBar from '../Components/Location/Search';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350, //setting the width of the box
    flexGrow: 1,
    fontFamily: 'Lato',
    textAlign: 'left',
    width: 350,
    fontSize: 25,

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

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();

  return (

    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
        <SearchBar />
      </header>

      <Container>
        <React.Fragment>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117231.14156459946!2d72.8310819342045!3d19.071604922356954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1634479226186!5m2!1sen!2sin" width="360" height="400" allowfullscreen="" loading="lazy"></iframe>

          <Grid container spacing={2} >
            {/* adding all components sequentially in grids */}

            <Grid item xs={12}>
              <Typography classes={classes} fontSize='30' > Address</Typography></Grid>

            <Grid item xs={12}>
              <TextField id="Name" label="Area" variant="outlined" classes={classes} /></Grid>

            <Grid item xs={12}>
              <TextField id="Name" label="Landmark" variant="outlined" classes={classes} /></Grid>

          </Grid>


        </React.Fragment>
      </Container>

      <footer className="App-footer" position="sticky ">
      </footer>
    </div>
  );
}
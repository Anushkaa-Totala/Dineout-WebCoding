import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HorizontalLabelPositionBelowStepper from './Stepper';
import { IconButton, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    header: {
        fontFamily: 'Lato',
        paddingLeft: theme.spacing(2),
        fontSize: 22,
        textAlign: 'left',
      },
}));

export default function SignUpGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}    direction="row"
        alignItems="center"
        justify="center">
                {/* adding all components sequentially in grids */}

                <Grid item xs={12}></Grid>

                <Grid item xs={2}>
                <Link to={process.env.PUBLIC_URL + '/home'}>
                    <IconButton> <ArrowBackIosIcon/> </IconButton> </Link>
                </Grid>

                <Grid item xs={9}>
                    <Typography className={classes.header}> Sign Up</Typography>
                </Grid>

                <Grid item xs={12}>
                    <HorizontalLabelPositionBelowStepper />
                </Grid>

            </Grid>
        </div>
    );
}
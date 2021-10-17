import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BasicButtonGroup from './ButtonGroup';
import { Link } from 'react-router-dom';
import { IconButton, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import LoginForm from './LoginForm';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function LoginGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {/* adding all components sequentially in grids */}


                <Grid item xs={2}>
                    <Link to={process.env.PUBLIC_URL + '/home'}>
                        <IconButton> <ArrowBackIosIcon /> </IconButton> </Link>
                </Grid>

                <Grid item xs={10}>
                    <p>
                        LOGIN
                    </p>
                </Grid>

                <Grid item xs={12}>
                   <LoginForm/>
                </Grid>

                <Grid item xs={12}>
                    <p>
                        OR Sign in with
                    </p>
                </Grid>

                <Grid item xs={12}>
                    <BasicButtonGroup />
                </Grid>

            </Grid>
        </div>
    );
}
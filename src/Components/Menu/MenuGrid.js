import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InsetDividers from './Divider';
import BasicButtonGroup from '../LoginPage/ButtonGroup';
import LoginButton from '../LoginPage/LoginButton';
import SignUpButton from './SignUpButton';
import { Link } from "react-router-dom";
import { IconButton, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

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

export default function MenuGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3} direction="row"
                alignItems="center"
                justify="center">
                {/* adding all components sequentially in grids */}

                <Grid item xs={2}>
                    <Link to={process.env.PUBLIC_URL + '/home'}>
                        <IconButton> <ArrowBackIosIcon /> </IconButton> </Link>
                </Grid>

                <Grid item xs={8}>
                    <p>
                        MENU
                    </p>
                </Grid>

                <Link to={process.env.PUBLIC_URL + '/login'}>
                    <Grid item xs={4}>
                        <LoginButton />
                    </Grid>
                </Link>

                <Link to={process.env.PUBLIC_URL + '/signup'}>
                    <Grid item xs={4}>
                        <SignUpButton />
                    </Grid>
                </Link>

                <Grid item xs={12}>
                    <p>
                        OR Sign in with
                    </p>
                </Grid>

                <Grid item xs={12}>
                    <BasicButtonGroup />
                </Grid>

                <Grid item xs={12}>
                    <InsetDividers />
                </Grid>
            </Grid>
        </div>
    );
}
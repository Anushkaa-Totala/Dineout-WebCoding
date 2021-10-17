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
    text: {
        font: 'Lato',
        fontSize: 22,
        textAlign: 'left',
        padding: theme.spacing(2),
    },
    or: {
        font: 'Lato',
        fontSize: 14,
        color: '#707070',
    },
}));

export default function MenuGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1} direction="row"
                alignItems="center"
                justify="center">
                {/* adding all components sequentially in grids */}

                <Grid item xs={1}>
                    <Link to={process.env.PUBLIC_URL + '/home'}>
                        <IconButton> <ArrowBackIosIcon /> </IconButton> </Link>
                </Grid>

                <Grid item xs={11}>
                    <Typography className={classes.text}>
                        Profile
                    </Typography>
                </Grid>

                <Grid item xs={12}> </Grid>

                <Link to={process.env.PUBLIC_URL + '/login'}>
                    <Grid item xs={6}>
                        <LoginButton />
                    </Grid>
                </Link>

                <Link to={process.env.PUBLIC_URL + '/signup'}>
                    <Grid item xs={6}>
                        <SignUpButton />
                    </Grid>
                </Link>

                <Grid item xs={12}>
                    <Typography className={classes.or}>
                        OR
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <BasicButtonGroup />
                </Grid>

                <Grid item xs={12}></Grid>

                <Grid item xs={10}>
                    <InsetDividers />
                </Grid>
            </Grid>
        </div>
    );
}
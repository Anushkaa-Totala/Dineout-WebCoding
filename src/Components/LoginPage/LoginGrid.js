import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NameInput from './NameInput';
import NumberInput from './NumberInput';
import BasicButtonGroup from './ButtonGroup';
import LoginButton from './LoginButton';


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
                <Grid item xs={12}>
                    <p>
                        LOGIN
                    </p>
                </Grid>

                <Grid item xs={12}>
                    <NameInput />
                </Grid>
                <Grid item xs={12}>
                    <NumberInput />
                </Grid>
                <Grid item xs={12}>
                    <p>
                        OR Sign in with
                    </p>
                </Grid>
                <Grid item xs={12}>
                    <BasicButtonGroup />
                </Grid>
                <Grid item xs={12}>
                    <LoginButton />
                </Grid>
            </Grid>
        </div>
    );
}
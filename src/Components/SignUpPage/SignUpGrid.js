import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HorizontalLabelPositionBelowStepper from './Stepper';




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

export default function SignUpGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {/* adding all components sequentially in grids */}
                <Grid item xs={12}>
                    <HorizontalLabelPositionBelowStepper />
                </Grid>

                <Grid item xs={12}>

                </Grid>

            </Grid>
        </div>
    );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function SignUpButton() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="contained" color="secondary" position='sticky'>
            SignUp
            </Button>
            {/* Simple Button for completing login step */}
        </div>
    );
}

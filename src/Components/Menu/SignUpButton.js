import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    button: {
        fontFamily: 'Lato',
        backgroundColor: '#F2635C',
        color: 'white',
        borderRadius: 14,
        borderColor: '#F2635C',
    },
}));

export default function SignUpButton() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button className={classes.button} variant="contained" autofocus>
            SignUp
            </Button>
            {/* Simple Button for completing login step */}
        </div>
    );
}

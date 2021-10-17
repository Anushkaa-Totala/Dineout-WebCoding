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
        background: 'linear-gradient(45deg, #FE6B8B 10%, #F2635C 90%)',
        border: 0,
        borderRadius: 15,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 45,
        padding: '0 30px',
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

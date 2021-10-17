import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';
import { Box, Grid, IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Loading from './DetectLocation';
import ControlledOpenSelect from './dropdown';

const useStyles = makeStyles((theme) => ({
    basic: {
        fontFamily: 'Lato',
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },
    button: {
        fontFamily: 'Lato',
        color: '#F2635C',
        borderRadius: 16,
        borderColor: '#F2635C',
        minHeight: '380',
    },
    type: {
        fontFamily: 'Lato',
        backgroundColor: '#F2635C',
        color: 'white',
        fontSize: 22,
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(2),
    },
    box: {
        maxWidth: 'auto',
        maxBlockSize: '80',
    },
}));

export default function PopUp() {
    const [open, setOpen] = React.useState(true);
    const classes = useStyles();
    const handleClickOpen = () => {
        setOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const loading = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description" className={classes.basic}
            >

                <Grid container spacing={2}
                    direction="row"
                    alignItems="center"
                    justify="center">

                    <Grid item xs={12}>
                        <Box className={classes.box}>
                            <Typography className={classes.type}>Find Location  <IconButton onClick={handleClose} className={classes.type} autoFocus>
                                <CloseIcon />  </IconButton>
                            </Typography>
                            {/* titlle on dialogue box */}

                        </Box>
                    </Grid>

                    {/* content on dialogue box */}

                    <Grid item xs={12}>
                        <ControlledOpenSelect className={classes.basic} />
                    </Grid>

                    <Grid item xs={6}>
                        <Link to={process.env.PUBLIC_URL + '/home'}>
                            <Loading />
                        </Link>
                    </Grid>

                    <Grid item xs={6}>
                        <Link to={process.env.PUBLIC_URL + '/home'}>
                            <Button onClick={handleClose} variant="outlined" className={classes.button} autoFocus>
                                Confirm
                            </Button>
                        </Link>
                    </Grid>

                </Grid>
            </Dialog>
        </div>
    );
}
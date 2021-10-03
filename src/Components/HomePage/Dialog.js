import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';
import { Grid, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Loading from './DetectLocation';
import ControlledOpenSelect from './dropdown';

export default function PopUp() {
    const [open, setOpen] = React.useState(true);

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
                aria-describedby="alert-dialog-description"
            >

                <Grid container spacing={0.1}
                    direction="row"
                    alignItems="center"
                    justify="center">

                    <Grid item xs={9}>
                        <DialogTitle id="alert-dialog-title">{"Find Location"}</DialogTitle>
                        {/* titlle on dialogue box */}
                    </Grid>

                    <Grid item xs={3}>
                        <Link to={process.env.PUBLIC_URL + '/home'}>
                            <IconButton onClick={handleClose} color="primary" autoFocus>
                                <CloseIcon />
                            </IconButton>
                        </Link>
                    </Grid>

                    {/* content on dialogue box */}

                    <Grid item xs={12}>
                        <ControlledOpenSelect />
                    </Grid>

                    <Grid item xs={6}>
                        <Link to={process.env.PUBLIC_URL + '/home'}>
                            <Loading />
                        </Link>
                    </Grid>

                    <Grid item xs={6}>
                        <Link to={process.env.PUBLIC_URL + '/home'}>
                            <Button onClick={handleClose} color="primary" autoFocus>
                                Confirm
                            </Button>
                        </Link>
                    </Grid>


                </Grid>
            </Dialog>
        </div>
    );
}
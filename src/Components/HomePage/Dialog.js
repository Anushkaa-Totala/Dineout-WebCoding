import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
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
                <DialogTitle id="alert-dialog-title">{"Find Location"}</DialogTitle>
                {/* titlle on dialogue box */}

                <Link to={process.env.PUBLIC_URL + '/home'}>
                    <IconButton onClick={handleClose} color="primary" autoFocus>
                        <CloseIcon />
                    </IconButton>
                </Link>

                <DialogActions>
                    {/* content on dialogue box */}

                    <ControlledOpenSelect />
                    <Link to={process.env.PUBLIC_URL + '/home'}>
                        <Loading />
                    </Link>

                    <Link to={process.env.PUBLIC_URL + '/home'}>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            Confirm
                        </Button>
                    </Link>

                  
                </DialogActions>
            </Dialog>
        </div>
    );
}
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import PersonPinIcon from '@material-ui/icons/PersonPin';

export default function PopUp() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                <PersonPinIcon />
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Find Location"}</DialogTitle>

                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Detect Location
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Select Location
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
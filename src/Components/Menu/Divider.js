import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NoteIcon from '@material-ui/icons/Note';
import SettingsIcon from '@material-ui/icons/Settings';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: '#470B32',
  },
  text: {
    fontFamily: 'Lato',
    fontSize: '20',
  },
}));

export default function InsetDividers() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <Grid container spacing={3} direction="row">

        <Grid item xs={3}>
          <ListItem>
            <ChatBubbleOutlineIcon className={classes.icon} />
          </ListItem> </Grid>

        <Grid item xs={9}>
          <ListItem>
            <Typography className={classes.text} > Customer Care</Typography>
          </ListItem> </Grid>

        <Grid item xs={12}>
          <Divider variant="inset" component="li" />
        </Grid>

        <Grid item xs={3}>
          <ListItem>
            <NoteIcon className={classes.icon} />
          </ListItem> </Grid>

        <Grid item xs={9}>
          <ListItem>
            <Typography className={classes.text} > Terms Conditions</Typography>
          </ListItem>
        </Grid>

        <Grid item xs={12}>
          <Divider variant="inset" component="li" />
        </Grid>

        <Grid item xs={3}>
          <ListItem>
            < SettingsIcon className={classes.icon} />
          </ListItem> </Grid>

        <Grid item xs={9}>
          <ListItem>
            <Typography className={classes.text} > Settings</Typography>
          </ListItem>
        </Grid>

      </Grid>

    </List>
  );
}

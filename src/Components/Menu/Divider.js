import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NoteIcon from '@material-ui/icons/Note';
import SettingsIcon from '@material-ui/icons/Settings';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function InsetDividers() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <Grid container spacing={3}    direction="row"
        alignItems="center"
        justify="center">

        <Grid item xs={12}>     
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ChatBubbleOutlineIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Customer Care" />
          </ListItem>

          <Divider variant="inset" component="li" />
      
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <NoteIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Terms and Conditions" />
          </ListItem>

          <Divider variant="inset" component="li" />
       
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                < SettingsIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Settings" />
          </ListItem>
        </Grid>

      </Grid>
    </List>
  );
}

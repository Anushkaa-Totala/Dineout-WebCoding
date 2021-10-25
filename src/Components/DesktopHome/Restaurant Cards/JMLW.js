import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import image from '../../../Assets/poptates.png'
import { Grid } from '@material-ui/core';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    border: 0,
    borderRadius: 22,
    // height: 255,
    // maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  button: {
    fontFamily: 'Lato',
    color: 'white',
    background: '#5C284F',
    border: 0,
    borderRadius: 25,
    color: 'white',
    padding: '2px 5px',
    fontSize: 8.2,
  },
  name: {
    fontFamily: 'Lato',
    paddingLeft: theme.spacing(2),
    fontSize: 20,
    textAlign: 'left',
  },
  body: {
    fontFamily: 'Lato',
    color: 'grey',
    paddingLeft: theme.spacing(2),
    textAlign: 'left',
    fontSize: 14,
  },
  body2: {
    fontFamily: 'Lato',
    color: 'grey',
    textAlign: 'left',
    fontSize: 14,
  },
}));

export default function JMLW() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>

      <Grid container spacing={1}
        direction="row"
        alignContent="center"
        alignItems="center">

        <Grid item lg={12}> <CardMedia
          className={classes.media}
          image='https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/k/k/p20805-15196382265a93d6d28ea66.jpg?tr=tr:n-small'
          title="Paella dish"
        /></Grid>

        <Grid item lg={4.5}>
          <Typography className={classes.name}> JMLW </Typography>
        </Grid>

        <Grid item lg={2.5}>
          <Typography className={classes.button}>INDIAN</Typography>
          {/* cuisine 1 */}
        </Grid>

        <Grid item lg={2.5}>
          <Typography className={classes.button}>MEXICAN</Typography>
          {/* cuisine 2 */}
        </Grid>

        <Grid item lg={2.5}>
          <Typography className={classes.button}>CHINESE</Typography>
          {/* cuisine 3 */}
        </Grid>

        <Grid item lg={9}>
          <Typography className={classes.body}>BKC, Kurla. </Typography>
          {/* address of the restaurant */}</Grid>

        <Grid item lg={3}>
          <CardActions disableSpacing><IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
          </CardActions></Grid>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Grid item lg={12}><Divider /></Grid>
          <CardContent>

            <Grid item lg={12}><Typography className={classes.body2}>
              Offer: Combine any offer with Dineout Pay to save up to 10% more on your bill and also get 20% cashback.
            </Typography></Grid>

          </CardContent>
        </Collapse>

      </Grid>

    </Card>
  );
}

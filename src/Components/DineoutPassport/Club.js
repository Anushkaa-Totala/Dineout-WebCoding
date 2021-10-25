import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FAQs from './FAQs';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#E4E4E4',
  },
  heading: {
    fontSize: 18,
    fontFamily: 'Lato',
    color: '#3C0729',
    textAlign: 'left',

  },
}));

export default function Club() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}         >
          <Typography className={classes.heading}>Get to know your club</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FAQs />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

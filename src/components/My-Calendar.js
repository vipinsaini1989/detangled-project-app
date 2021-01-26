import { makeStyles } from '@material-ui/core';
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));

const MILLI_PER_DAY = 24 * 60 * 60 * 1000;

export default function MyCalendar() {
  const classes = useStyles();

  return (
    <div>
      <Calendar
        className={classes.root}
        selectRange
        value={[new Date(), +new Date() + 3 * MILLI_PER_DAY]}
      />
    </div>
  );
}

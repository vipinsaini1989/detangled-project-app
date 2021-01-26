import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '97%',
    margin: '1rem',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      position: 'fixed',
      width: '95%',
    },
  },
}));

const MILLI_PER_DAY = 24 * 60 * 60 * 1000;

export default function MyCalendar({ event }) {
  const classes = useStyles();
  const [range, setRange] = useState([new Date()]);

  useEffect(() => {
    if (event) {
      const dateRange = [new Date(event.start)];
      const effectiveDays = event.duration - 1;
      const nextDate = +new Date(event.start) + effectiveDays * MILLI_PER_DAY;
      dateRange.push(new Date(nextDate));
      setRange(dateRange);
    } else {
      setRange([new Date()]);
    }
  }, [event]);

  return (
    <div>
      <Calendar className={classes.root} selectRange value={range} />
    </div>
  );
}

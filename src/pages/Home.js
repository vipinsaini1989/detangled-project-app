import { Grid, makeStyles, Modal } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import AddEditForm from '../components/AddEditForm';
import MyCalendar from '../components/My-Calendar';
import SimpleCard from '../components/SimpleCard';
import { getAllEvents } from '../services/dataProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  leftSection: {
    height: '100vh',
    overflow: 'scroll',
    [theme.breakpoints.down('sm')]: {
      marginTop: '15%',
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [events, setEvents] = useState([]);

  const allEvents = useCallback(async () => {
    const result = await getAllEvents();
    setEvents(result);
  }, []);

  useEffect(() => {
    allEvents();
  }, [allEvents]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item md={6}>
          <Grid container spacing={2} className={classes.leftSection}>
            {events.map((evt) => (
              <Grid item md={6} xs={12} key={evt.id}>
                <SimpleCard modalState={setOpen} event={evt} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item md={6}>
          <MyCalendar />
        </Grid>
      </Grid>

      <Modal open={open} onClose={handleClose}>
        <div>
          <AddEditForm />
        </div>
      </Modal>
    </>
  );
}

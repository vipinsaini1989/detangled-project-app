import { Grid, makeStyles, Modal } from '@material-ui/core';
import React, { useState } from 'react';
import AddEditForm from '../components/AddEditForm';
import MyCalendar from '../components/My-Calendar';
import SimpleCard from '../components/SimpleCard';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function Home() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container>
        <Grid item md={6}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <SimpleCard modalState={setOpen} />
            </Grid>
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

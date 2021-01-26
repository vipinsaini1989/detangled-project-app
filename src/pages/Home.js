import { Grid, makeStyles, Modal } from '@material-ui/core';
import React, { useState } from 'react';
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
          Right Side
        </Grid>
      </Grid>

      <Modal open={open} onClose={handleClose}>
        <div>Hello world</div>
      </Modal>
    </>
  );
}

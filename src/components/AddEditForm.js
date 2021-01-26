import {
  Button,
  FormControl,
  Input,
  InputLabel,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    top: '20%',
    left: '25%',
    width: '50%',
    position: 'absolute',
  },
  formMain: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginBottom: '1rem',
    },
  },
  formBtn: {
    textAlign: 'right',
  },
}));

export default function AddEditForm() {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.root}>
        <form noValidate autoComplete='off' className={classes.formMain}>
          <Typography variant='h5' align='center'>
            Edit Form
          </Typography>

          <FormControl>
            <InputLabel htmlFor='destination'>Destination</InputLabel>
            <Input id='destination' />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='start-date' shrink>
              Start Date
            </InputLabel>
            <Input id='start-date' type='date' />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='duration'>Duration</InputLabel>
            <Input
              id='duration'
              type='number'
              inputProps={{ min: 0, max: 365 }}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='comment'>Comment</InputLabel>
            <Input id='comment' />
          </FormControl>
          <FormControl style={{ width: '50%' }}>
            <InputLabel htmlFor='color'>Color</InputLabel>
            <Input id='color' type='color' />
          </FormControl>

          <div className={classes.formBtn}>
            <Button variant='contained' color='primary'>
              Edit
            </Button>
          </div>
        </form>
      </Paper>
    </>
  );
}

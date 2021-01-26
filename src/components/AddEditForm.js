import {
  Button,
  FormControl,
  Input,
  InputLabel,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';

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

const DEFAULT_VALUES = {
  destination: '',
  start: new Date(),
  duration: 0,
  color: '',
  comment: '',
};

function formatDate(val) {
  let newDate = new Date(val).toLocaleDateString();
  newDate = newDate.split('/').reverse().join('-');
  return newDate;
}

function reverseFormatDate(val) {
  const dateStr = val.split('-').join(',');
  return new Date(dateStr).toISOString();
}

export default function AddEditForm({ event, updateEvents, close }) {
  const classes = useStyles();
  const [formData, setFormData] = useState(DEFAULT_VALUES);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFormData = { ...formData };
    newFormData.start = reverseFormatDate(newFormData.start);

    await updateEvents(newFormData);
    close();
  };

  const handleOnChangeDestination = (e) => {
    setFormData({ ...formData, destination: e.target.value });
  };

  const handleOnChangeComment = (e) => {
    setFormData({ ...formData, comment: e.target.value });
  };

  useEffect(() => {
    if (event) {
      const copy = { ...event };
      copy.start = formatDate(copy.start);
      setFormData(copy);
    }
  }, [event]);

  return (
    <>
      <Paper className={classes.root}>
        <form
          noValidate
          autoComplete='off'
          className={classes.formMain}
          onSubmit={handleSubmit}
        >
          <Typography variant='h5' align='center'>
            {formData.id ? 'Edit Form' : 'Add New Event'}
          </Typography>

          <FormControl>
            <InputLabel htmlFor='destination'>Destination</InputLabel>
            <Input
              id='destination'
              value={formData.destination}
              onChange={handleOnChangeDestination}
            />
          </FormControl>
          <FormControl disabled={!formData.id}>
            <InputLabel htmlFor='start-date' shrink>
              Start Date
            </InputLabel>
            <Input id='start-date' type='date' value={formData.start} />
          </FormControl>
          <FormControl disabled={!formData.id}>
            <InputLabel htmlFor='duration'>Duration</InputLabel>
            <Input
              id='duration'
              type='number'
              value={formData.duration}
              inputProps={{ min: 0, max: 365 }}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='comment'>Comment</InputLabel>
            <Input
              id='comment'
              value={formData.comment}
              onChange={handleOnChangeComment}
            />
          </FormControl>
          <FormControl style={{ width: '50%' }} disabled={!formData.id}>
            <InputLabel htmlFor='color'>Color</InputLabel>
            <Input id='color' type='color' value={formData.color} />
          </FormControl>

          <div className={classes.formBtn}>
            <Button variant='contained' color='primary' type='submit'>
              {formData.id ? 'Edit' : 'Add'}
            </Button>
          </div>
        </form>
      </Paper>
    </>
  );
}

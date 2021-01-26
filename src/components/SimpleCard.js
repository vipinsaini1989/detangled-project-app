import React from 'react';
import {
  makeStyles,
  CardActions,
  CardContent,
  Button,
  Typography,
  Card,
} from '@material-ui/core/';

const useStyles = makeStyles({
  root: { cursor: 'pointer' },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  deleteBtn: {
    color: 'tomato',
  },
});

export default function SimpleCard({
  modalState,
  event,
  handleSelect,
  handleDelete,
  selected,
}) {
  const classes = useStyles();

  const handleOpen = () => {
    modalState(true);
  };

  return (
    <Card
      className={(classes.root, selected)}
      style={{ cursor: 'pointer' }}
      variant='outlined'
      onClick={() => handleSelect(event)}
    >
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          {new Date(event.start).toLocaleDateString()}
        </Typography>
        <Typography variant='h5' component='h2'>
          {event.destination}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {event.duration} days tour
        </Typography>
        <Typography variant='body2' component='p'>
          Comment:
          <br />
          {event.comment}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          variant='contained'
          color='primary'
          onClick={handleOpen}
        >
          Edit
        </Button>
        <Button
          size='small'
          className={classes.deleteBtn}
          onClick={() => handleDelete(event.id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

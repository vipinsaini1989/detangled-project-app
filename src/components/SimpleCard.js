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
  root: {},
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

export default function SimpleCard({ modalState }) {
  const classes = useStyles();

  const handleOpen = () => {
    modalState(true);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          2020-05-18
        </Typography>
        <Typography variant='h5' component='h2'>
          North Oleta
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          29 days tour
        </Typography>
        <Typography variant='body2' component='p'>
          Comment:
          <br />
          {'Calculating Analyst'}
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
        <Button size='small' className={classes.deleteBtn}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

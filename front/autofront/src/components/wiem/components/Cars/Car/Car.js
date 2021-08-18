import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';

import StarIcon from "@material-ui/icons/Star";
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { reportCar, deleteCar } from '../../../actions/cars';
import useStyles from './styles';

const Car = ({ car, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          car.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        etat={car.etat}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{car.nom}</Typography>
        <Typography variant="body2">
          {moment(car.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(car._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {car.entretien}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {car.nom}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {car.etat}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(reportCar(car._id))}
        >
          <StarIcon fontSize="small" /> {car.reportCount} Alerte(s){" "}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deleteCar(car._id))}
        >
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Car;

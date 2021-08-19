import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

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
          car.photo ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
      />
      <div className={classes.overlay}>
        <Typography variant="body2">
          {moment(car.createdAt).fromNow()}
        </Typography>
        <Typography variant="body2">
          reparations : {car.reparations.toString()}
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
      <Typography variant="h6"> Véhicule : {car.nom}</Typography>
      <Typography variant="h6">Etat : {car.etat}</Typography>
      <Typography variant="h6"> Dernier Entretien : {car.entretien}</Typography>

      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(reportCar(car._id))}
        >
          <StarIcon fontSize="small" /> {car.reportCount} Accident(s)
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

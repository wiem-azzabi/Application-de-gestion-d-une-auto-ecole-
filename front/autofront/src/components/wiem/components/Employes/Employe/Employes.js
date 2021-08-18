import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';

import StarIcon from "@material-ui/icons/Star";
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deleteEmploye } from '../../../actions/employes';
import useStyles from './styles';

const Employe = ({ employe, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          employe.photo ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        nom={employe.nom}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{employe.prenom}</Typography>
        <Typography variant="body2">
          {moment(employe.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(employe._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {employe.employee}
        </Typography>
      </div>
      <Typography
        className={classes.nom}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {employe.nom}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {employe.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deleteEmploye(employe._id))}
        >
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Employe;

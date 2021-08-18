import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Car from './Car/Car';
import useStyles from './styles';
const Cars = ({ setCurrentId }) => {
  const cars = useSelector((state) => state.cars);
  const classes = useStyles();
  
  //console.log(posts);
  return !cars.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {cars.map((car) => (
        <Grid key={car._id} item xs={12} sm={6} md={6}>
          <Car car={car} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );

};
export default Cars;

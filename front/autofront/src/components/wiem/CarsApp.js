import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Cars from './components/Cars/Cars';
import CarForm from './components/CarForm/CarForm';


import { getCars } from './actions/cars';
import useStyles from './Wiemstyles';
import carimg from './images/carimg.png';

const CarsApp = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getCars());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Véhicules</Typography>
        <img className={classes.image} src={carimg} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Cars setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CarForm currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default CarsApp;

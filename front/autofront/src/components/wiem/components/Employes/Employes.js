import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Employe from './Employe/Employes';
import useStyles from './styles';

const Employes = ({ setCurrentId }) => {
  const employes = useSelector((state) => state.employes);
  const classes = useStyles();

  return (
    !employes.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {employes.map((employe) => (
          <Grid key={employe._id} item xs={12} sm={6} md={6}>
            <Employe employe={employe} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Employes;

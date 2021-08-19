import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper,Checkbox } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import useStyles from "./styles";
import { createCar, updateCar } from "../../actions/cars";


const CarForm = ({ currentId, setCurrentId }) => {
  const [carData, setCarData] = useState({
    nom: "",
    etat: "",
    assurances: true,
    reparations: true,
    vignettes: true,
    visitetechnique: true, 
    entretien:"",
    photo: "",
  });
  const car = useSelector((state) =>
    currentId ? state.cars.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {if (car) setCarData(car);}, [car]);

  const clear = () => {
    setCurrentId(0);
    setCarData({
      nom: "",
      etat: "",
      assurances: true,
      reparations: true,
      vignettes: true,
      visitetechnique: true,
      entretien: "",
      photo: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createCar(carData));
      clear();
    } else {
      dispatch(updateCar(currentId, carData));
      clear();
    }
  };

const [isCheckedreparations, setIsCheckedreparations] = useState(true);
const handleOnChange = () => {
  setIsCheckedreparations(!isCheckedreparations);
  setCarData({ ...carData, reparations: isCheckedreparations });
};
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Modifier "${car.nom}"` : "Ajouter nouveau véhicule"}
        </Typography>
        <TextField
          name="nom"
          variant="outlined"
          label="Nom/Marque/immatricule"
          fullWidth
          value={carData.nom}
          onChange={(e) => setCarData({ ...carData, nom: e.target.value })}
        />
        <TextField
          name="etat"
          variant="outlined"
          label="Etat : (en marche / hors service)"
          fullWidth
          value={carData.etat}
          onChange={(e) => setCarData({ ...carData, etat: e.target.value })}
        />
        <TextField
          name="entretien"
          variant="outlined"
          label="Date dernier entretien"
          fullWidth
          value={carData.entretien}
          onChange={(e) =>
            setCarData({ ...carData, entretien: e.target.value })
          }
        />
       
        <br />
        <br/>
        <Checkbox
          value="reparations"
          checked={isCheckedreparations}
          onChange={handleOnChange}
        />
        
        <br />
        <br />
        {/* <Check boxes pour vignettes,visite technique...> */}
        <div className={classes.fileInput}>
          Photo (.jpg)
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setCarData({ ...carData, photo: base64 })}
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default CarForm;

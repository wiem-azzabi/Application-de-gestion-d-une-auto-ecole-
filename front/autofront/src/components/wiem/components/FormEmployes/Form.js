import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import useStyles from "./styles";
import { createEmploye, updateEmploye } from "../../actions/employes";

const Form = ({ currentId, setCurrentId }) => {
  const [employeData, setEmployeData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    poste: "",
    photo: "",
  });
  const employe = useSelector((state) =>
    currentId ? state.employes.find((telephone) => telephone._id === currentId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (employe) setEmployeData(employe);
  }, [employe]);

  const clear = () => {
    setCurrentId(0);
    setEmployeData({
      nom: "",
      prenom: "",
      telephone: "",
      poste: "",
      photo: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createEmploye(employeData));
      clear();
    } else {
      dispatch(updateEmploye(currentId, employeData));
      clear();
    }
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
          {currentId
            ? `Modifier "${employe.nom}"`
            : "Ajouter Nouvel Employé"}
        </Typography>
        <TextField
          name="nom"
          variant="outlined"
          label="Nom"
          fullWidth
          value={employeData.nom}
          onChange={(e) =>
            setEmployeData({ ...employeData, nom: e.target.value })
          }
        />
        <TextField
          name="prenom"
          variant="outlined"
          label="Prénom"
          fullWidth
          value={employeData.prenom}
          onChange={(e) => setEmployeData({ ...employeData, prenom: e.target.value })}
        />
        <TextField
          name="telephone"
          variant="outlined"
          label="Telephone"
          fullWidth
          multiline
          value={employeData.telephone}
          onChange={(e) =>
            setEmployeData({ ...employeData, telephone: e.target.value })
          }
        />
        <TextField
          name="poste"
          variant="outlined"
          label="Poste "
          fullWidth
          value={employeData.poste}
          onChange={(e) =>
            setEmployeData({ ...employeData, poste: e.target.value})
          }
        />
        <p>Photo(Format .jpg)</p>
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setEmployeData({ ...employeData, photo: base64 })
            }
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

export default Form;

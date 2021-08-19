import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import M from "materialize-css";

const Etapee1 = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));

  const getSteps = () => {
    return ["Inscription", "Payement"];
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [birth, setBirth] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const PostData = () => {
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      M.toast({ html: "invalid email", classes: "#b71c1c red darken-4" });
      return;
    }
    fetch(" http://localhost:3001/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        firstname,
        email,
        password,
        number,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#b71c1c red darken-4" });
        } else {
          M.toast({ html: data.message, classes: "#80cbc4 teal lighten-3" });
          history.push("/payement");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="form-container">
      <h1 className="mb-5">Inscrivez-Vous</h1>
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          <Button variant="contained" color="primary"></Button>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          className="form-control"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={props.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="firstname">Prénom</label>
        <input
          type="text"
          className="form-control"
          name="firstname"
          onChange={(e) => setFirstname(e.target.value)}
          value={props.firstname}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={props.email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Numéro de téléphone</label>
        <input
          type="number"
          className="form-control"
          name="number"
          onChange={(e) => setNumber(e.target.value)}
          value={props.number}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          className="form-control"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={props.password}
        />
      </div>
      <br />
      <div className="text-right">
        {console.log(props.step)}
        <button
          className="btn btn-primary"
          onClick={() => PostData() && handleNext}
        >
          enregister
        </button>
      </div>
    </div>
  );
};

export default Etapee1;

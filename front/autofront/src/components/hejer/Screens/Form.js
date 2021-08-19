import React, { Component } from "react";
import { Link } from "react-router-dom";
import Etapee1 from "./Etape1";
import Etape2 from "./Etape2";
import Login from "./Login";
import "./Form.css";
export class Form extends Component {
  state = {
    step: 1,
    name: "",
    firstname: "",
    birth: "",
    adresse: "",
    email: "",
    password: "",
    number: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  render() {
    const { step } = this.state;
    const { name, firstname, birth, adresse, email, password, number } =
      this.state;
    const values = {
      name,
      firstname,
      birth,
      adresse,
      email,
      password,
      number,
    };
    switch (step) {
      case 1:
        return <Etapee1 nextStep={this.nextStep} values={values} />;
      case 2:
        return (
          <Link to="/Payement">
            <Etape2 />
          </Link>
        );

      default:
        return <Login />;
    }
  }
}

export default Form;

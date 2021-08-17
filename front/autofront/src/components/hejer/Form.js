import React, { Component } from 'react'
import Etapee1 from './Etape1'
import Payments from "./Etape2";
import Signup from './Screens/Signup'
import './Form.css'
export class Form extends Component {
  state = {
    step: 1,
    nom: "",
    prenom: "",
    date_de_naissance: "",
    adresse: "",
    email: "",
    password: "",
    tel: "",
  };

  nextStep = () => {
     const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  inputChange = (e) => {
    this.setState({
      nom: e.target.value,
    });
  };
  inputChangeprenom = (e) => {
    this.setState({
      nomprenom: e.target.value,
    });
  };
  inputChangedate = (e) => {
    this.setState({
      date_de_naissance: e.target.value,
    });
  };
  inputChangeadresse = (e) => {
    this.setState({
      adresse: e.target.value,
    });
  };
  inputChangetel = (e) => {
    this.setState({
      tel: e.target.value,
    });
  };
  inputChangepassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  inputChangeemail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  render() {
    const { step } = this.state;
    const { nom, prenom, date_de_naissance, adresse, email, password, tel } =
      this.state;
    const values = {
      nom,
      prenom,
      date_de_naissance,
      adresse,
      email,
      password,
      tel,
    };
    switch (step) {
      case 1:
        return (
          <Etapee1
            nextStep={this.nextStep}
            inputChange={this.inputChange}
            inputChangeprenom={this.inputChangeprenom}
            inputChangedate={this.inputChangedate}
            inputChangeadresse={this.inputChangeadresse}
            inputChangeemail={this.inputChangeemail}
            inputChangetel={this.inputChangetel}
            inputChangepassword={this.inputChangepassword}
            values={values}
          />
        );
      case 2:
        return <Payments prevStep={this.prevStep} nextStep={this.nextStep} />;
        
     default:
            return (<Signup/>)
    }

  }
}

export default Form

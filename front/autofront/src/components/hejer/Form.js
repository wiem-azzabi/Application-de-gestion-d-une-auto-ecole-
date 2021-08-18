import React, { Component } from 'react'
import Etapee1 from './Etape1'
import Payments from "./Etape2";
import Signup from './Screens/Signup'
import './Form.css'
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

  inputChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  inputChangefirstname = (e) => {
    this.setState({
      firstname: e.target.value,
    });
  };
  inputChangedate = (e) => {
    this.setState({
      birth: e.target.value,
    });
  };
  inputChangeadresse = (e) => {
    this.setState({
      adresse: e.target.value,
    });
  };
  inputChangenumber = (e) => {
    this.setState({
      number: e.target.value,
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
        return (
          <Etapee1
            nextStep={this.nextStep}
            inputChange={this.inputChange}
            inputChangefirstname={this.inputChangefirstname}
            inputChangedate={this.inputChangedate}
            inputChangeadresse={this.inputChangeadresse}
            inputChangeemail={this.inputChangeemail}
            inputChangenumber={this.inputChangenumber}
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

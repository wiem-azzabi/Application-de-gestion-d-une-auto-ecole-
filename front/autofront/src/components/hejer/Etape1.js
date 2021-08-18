import React, { useState } from "react";
import M from "materialize-css";
const Etapee1 =(props)=>{
  //   continue = (e) => {
  //     e.preventDefault();
  //     this.props.nextStep();
  //   };
const [name, setName] = useState("");
const [password, setPassword] = useState("");
const [firstname, setFirstname] = useState("");
const [birth, setBirth] = useState("");
const [adress, setAdress] = useState("");
const [email, setEmail] = useState("");
const [number, setNumber] = useState("");

const PostData = () => {
  fetch("http://localhost:5000/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      firstname,
      email,
      password,
      birth,
      adress,
      number,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        M.toast({ html: "data.error" });
      }
    });
};
    return (
      <div className="form-container">
        <h1 className="mb-5">Inscrivez-Vous</h1>
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
          {/* <button className="btn btn-primary" onClick={props.nextStep}>
            Suivant
          </button> */}
          <button className="btn btn-primary" onClick={() => PostData()}>
            enregister
          </button>
        </div>
      </div>
    );
  }


export default Etapee1;

import React, { Component } from "react";

export class Etapee1 extends Component {
  //   continue = (e) => {
  //     e.preventDefault();
  //     this.props.nextStep();
  //   };

  render() {
    return (
      <div className="form-container">
        <h1 className="mb-5">Inscrivez-Vous</h1>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            className="form-control"
            name="nom"
            onChange={this.props.inputChange}
            value={this.props.nom}
          />
        </div>
        <div className="form-group">
          <label htmlFor="prenom">Prénom</label>
          <input
            type="text"
            className="form-control"
            name="prenom"
            onChange={this.props.inputChangeprenom}
            value={this.props.prenom}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={this.props.inputChangeemail}
            value={this.props.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Numéro de téléphone</label>
          <input
            type="number"
            className="form-control"
            name="tel"
            onChange={this.props.inputChangetel}
            value={this.props.tel}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={this.props.inputChange}
            value={this.props.password}
          />
        </div>
        <br />
        <div className="text-right">
          <button className="btn btn-primary" onClick={this.props.nextStep}>
            Suivant
          </button>
        </div>
      </div>
    );
  }
}

export default Etapee1;

import React from "react";
import { Link } from "react-router-dom";

const LoginAdmin = () => {
  return (
    <div className="mycard2  ">
      <div className="card auth-card2 input-field">
        <h2>Se connecter en tant que Admin </h2>
        <p> </p>
        <p> </p>
        <form>
          <label>
            <input type="text" placeholder="email" />
            <input type="text" placeholder="password" />
          </label>
        </form>

        <Link to="./admin">
          <button
            type="button"
            class="btn btn-outline-primary #64b5f6 blue lighten-2"
          >
            Entrer
          </button>
        </Link>
        <Link to="./">
          <button
            type="button"
            class="btn btn-outline-primary #64b5f6 blue lighten-2"
          >
            Retour
          </button>
        </Link>
      </div>
    </div>
  );
};
export default LoginAdmin;

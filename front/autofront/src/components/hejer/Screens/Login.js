import React,{useState,useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from "materialize-css";



const Login =()=>{   
  
    return (
      <div className="mycard2  ">
        <div className="card auth-card2 input-field">
          <h2>Se connecter </h2>
          <p> </p>
          <p> </p>
          <form>
            <label>
              <input type="text" placeholder="email" />
              <input type="text" placeholder="password" />
            </label>
          </form>
          <Link to="./client">
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
export default Login;
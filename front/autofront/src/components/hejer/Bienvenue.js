import React from "react";
import "./Bienvenue.css";
import {Link} from 'react-router-dom'
import { Fade } from "react-reveal";
const Acceuill = () => {
  return (
    <div className="body">
      <div className="ligne">
        <div className="l1"></div>
        <div className="l2"></div>
      </div>

      <div className="container-first">
        <Fade left>
          <h1>
            <span>Réussir </span>
            <span>votre </span>
            <span>permis </span>
          </h1>
        </Fade>
        <div className="container-btns">
          <Link to="/Signup">
            <button className="btn-first b1">S'inscrire</button>
          </Link>
          <Link to="/Login">
            <button className="btn-first b2">Se connecter </button>
          </Link>
          <Link to="/Loginadmin">
            <button className="btn-first b2">Se connecter en tant que admin </button>
          </Link>
        </div>
      </div>
      <img
        alt=""
        className="logo"
        src="https://e7.pngegg.com/pngimages/898/367/png-clipart-driving-course-training-driver-s-education-driver-s-license-driving-school-driving-class-thumbnail.png"
      />
      <Fade right></Fade>
      <ul className="medias">
        <li class="bulle">
          <img
            alt=""
            src="https://img.icons8.com/ios/500/facebook--v1.png"
            class="logo-medias"
          />
        </li>
        <li class="bulle">
          <img
            alt=""
            src="https://img.icons8.com/ios/452/instagram-new--v1.png"
            class="logo-medias"
          />
        </li>
        <li class="bulle">
          <img
            alt=""
            src="https://img.icons8.com/ios/452/twitter--v1.png"
            class="logo-medias"
          />
        </li>
        <li class="bulle">
          <img
            alt=""
            src="data:image/png;base64,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"
            class="logo-medias"
          />
        </li>
      </ul>
    </div>
  );
};
export default Acceuill;

import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Employés from "./pages/Employés";
import Planification from "./pages/Planification";
import RéparationVehicule from "./pages/RéparationVehicule";
import Séance_code from "./pages/Séance_code";
import SuiviCandidat from "./pages/SuiviCandidat";
import Véhiculesajout from "./pages/Véhiculesajout";
import Acceuil from "../hejer/Acceuil";
function AppAdmin() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/candidat" component={SuiviCandidat} />
          <Route exact path="/véhicule" component={Véhiculesajout} />
          <Route exact path="/code" component={Séance_code} />
          <Route exact path="/réparation" component={RéparationVehicule} />
          <Route exact path="/planification" component={Planification} />
          <Route exact path="/employé" component={Employés} />
          <Route exact path="/" component={Acceuil} />

          <div
            style={{
              width: "2000px",
              marginLeft: "300px",
              marginBottom: "200px",
              marginRight: "200px",
            }}
            className="col-md-8"
          ></div>
        </Switch>
      </Router>
    </>
  );
}

export default AppAdmin;

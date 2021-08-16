import React from 'react';
import './AppO.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Userprofile from './pages/Userprofile';
import Demo from './pages/demo';
import Payement from './pages/Payement';
import Quizz from "./pages/Test/Quizz";

import QuizzSolution from "./pages/Test/QuizzSolution";


function AcceuilO() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/oumaima" component={Home} />
          <Route exact path="/Userprofile" component={Userprofile} />
          <Route exact path="/TestGratuit" component={Quizz} />
          <Route exact path="/payement" component={Payement} />
          <Route exact path="/Solution" component={QuizzSolution} />
          <div
            style={{
              width: "2000px",
              marginLeft: "300px",
              marginBottom: "200px",
              marginRight: "200px",
            }}
            className="col-md-8"
          >
            <Route exact path="/Demo" component={Demo} />
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default AcceuilO;

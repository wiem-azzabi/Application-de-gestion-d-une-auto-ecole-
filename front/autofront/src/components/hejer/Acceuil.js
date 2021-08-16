import React from 'react'
import NavBar from './Navbar'
import Login from './Screens/Login'
import Signup from './Screens/Signup'
import More from './Screens/More'
import { BrowserRouter, Route} from "react-router-dom";
import AcceuilO from '../oumaima/AcceuilO'
import './Acceuil.css'
const Acceuil =()=>{
    return (
      <BrowserRouter>
        <Route exact path="/">
          <NavBar />
        </Route>
        <Route path="/signup">
          <NavBar />
          <Signup />
        </Route>
        <Route path="/login">
          <NavBar />
          <Login />
        </Route>
        <Route path="/more">
          <NavBar />
          <More />
        </Route>
        <Route path="/oumaima">
          <AcceuilO />
        </Route>
      </BrowserRouter>
    );
}

export default Acceuil 
import React from 'react'
import Acceuill from './Bienvenue'
import Login from './Screens/Login'
import Signup from './Screens/Signup'
import More from './Screens/More'
import { BrowserRouter, Route} from "react-router-dom";
import AcceuilO from '../oumaima/AcceuilO'
import AppAdmin from "../PageAdmin/AppAdmin"

import './Acceuil.css'
import Form from './Form'
const Acceuil =()=>{
    return (
      <BrowserRouter>
        <Route exact path="/">
          <Acceuill />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Form/>
        </Route>
        <Route path="/more">
          <More />
        </Route>
        <Route path="/oumaima">
          {/* <AcceuilO /> */}
         <AppAdmin/>
        </Route>
      </BrowserRouter>
    );
}

export default Acceuil 
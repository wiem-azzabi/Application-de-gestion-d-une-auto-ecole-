import React from "react";
import EmployesApp from '../../wiem/EmployesApp'
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "../../wiem/reducers"
const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default function Employés() {
  return (
   
    <Provider store={store}>
    <div className="employés">
      <EmployesApp/>
    </div>
    </Provider>

  );
}

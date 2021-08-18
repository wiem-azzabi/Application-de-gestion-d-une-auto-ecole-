import React from "react";
import CarsApp from "../../wiem/CarsApp";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "../../wiem/reducers";
const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default function Véhiculesajout() {
  return (
    <div className="ajout">
      <Provider store={store}>
          <CarsApp />     
      </Provider>
    </div>
  );
}

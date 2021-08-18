import React from 'react'
import CarsApp from '../../wiem/CarsApp'
import EmployesApp from '../../wiem/EmployesApp'
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "../../wiem/reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default function Payement() {
    return (
      <div className="payement">
        <Provider store={store}>
          <EmployesApp />
        </Provider>
      </div>
    );
}

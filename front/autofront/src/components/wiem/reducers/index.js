import { combineReducers } from 'redux';
import employesReducer from './employes';
import carsReducer from './cars';
export const reducers = combineReducers({ employes: employesReducer,cars: carsReducer });

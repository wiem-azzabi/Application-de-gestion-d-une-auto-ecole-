import { FETCH_ALLCARS, CREATECAR, UPDATECAR, DELETECAR, REPORTCAR} from '../constants/carActionTypes';
import * as api from '../api/index.js';

export const getCars = () => async (dispatch) => {
  try {
    const {data}  = await api.fetchCars({});
    // console.log(data);
    dispatch({ type: FETCH_ALLCARS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createCar = (car) => async (dispatch) => {
  try {
    const {data} = await api.createCar(car);
    dispatch( {type: CREATECAR, payload: data});
  } 
  catch (error) {
    console.log(error.message);
  }
};

export const updateCar = (id, car) => async (dispatch) => {
  try {
    const { carData } = await api.updateCar(id, car);

    dispatch({ type: UPDATECAR, payload: carData });
  } catch (error) {
    console.log(error.message);
  }
};

export const reportCar = (id) => async (dispatch) => {
  try {
    const { carData } = await api.reportCar(id);

    dispatch({ type: REPORTCAR, payload: carData });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCar = (id) => async (dispatch) => {
  try {
    await api.deleteCar(id);

    dispatch({ type: DELETECAR, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
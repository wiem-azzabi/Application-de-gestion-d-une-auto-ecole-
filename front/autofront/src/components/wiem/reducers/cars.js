import {
  FETCH_ALLCARS,
  CREATECAR,
  UPDATECAR,
  DELETECAR,
  REPORTCAR,
} from "../constants/carActionTypes";

export default function carsReducer (cars = [], action) {
  switch (action.type) {
    case FETCH_ALLCARS:
      return action.payload;
    case CREATECAR:
      return [...cars, action.payload];
    case REPORTCAR:
      return cars.map((car) =>
        car._id === action.payload._id ? action.payload : car
      );
    case UPDATECAR:
      return cars.map((car) =>
        car._id === action.payload._id ? action.payload : car
      );
    case DELETECAR:
      return cars.filter((car) => car._id !== action.payload);
    default:
      return cars;
  }
}
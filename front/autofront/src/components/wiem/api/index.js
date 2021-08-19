import axios from "axios";

const url = 'http://localhost:3001/employes';
const url2 = 'http://localhost:3001/cars';

export const fetchCars = () => axios.get(url2);
export const createCar = (newCar) => axios.post(url2, newCar);
export const reportCar = (id) => axios.patch(`${url2}/${id}/reportCar`);
export const updateCar = (id, updatedCar) =>axios.patch(`${url2}/${id}`, updatedCar);
export const deleteCar = (id) => axios.delete(`${url2}/${id}`);

export const fetchEmployes = () => axios.get(url);
export const createEmploye = (newEmploye) => axios.post(url, newEmploye);
export const updateEmploye = (id, updatedEmploye) =>axios.patch(`${url}/${id}`, updatedEmploye);
export const deleteEmploye = (id) => axios.delete(`${url}/${id}`);

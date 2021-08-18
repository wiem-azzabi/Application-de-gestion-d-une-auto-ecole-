import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';

export default function employesReducer (employes = [], action) {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...employes, action.payload];
    case UPDATE:
      return employes.map((employe) => (employe._id === action.payload._id ? action.payload : employe));
    case DELETE:
      return employes.filter((employe) => employe._id !== action.payload);
    default:
      return employes;
  }
}


import {
  GET_PAISES,
  PAIS_DETALLE,
  FILTER_BACK,
  BUSQUEDA
} from "../actions/actions-names";

const initialState = {
  paises: [],
  oriPaises: [],
  detallePais: [],
  oriPaises_filtrados:[],
  paises_filtrados: [],
  busqTerm: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PAISES:
      return {
        ...state,
        paises: action.value,
        oriPaises: action.value,
      };
    case PAIS_DETALLE:
      return {
        ...state,
        detallePais: action.value,
      };
    case FILTER_BACK:
      return {
        ...state,
        paises_filtrados: action.value,
        oriPaises_filtrados:action.value
      };
    case BUSQUEDA:
      return {
        ...state,
        busqTerm: action.value,
      };
    default:
      return state;
  }
}

export default reducer;

//.slice(1).slice(0,-1)

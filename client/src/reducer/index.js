import {
  GET_PAISES,
  PAIS_DETALLE,
  FILTER_BACK,
} from "../actions/actions-names";

const initialState = {
  paises: [],
  detallePais: [],
  paises_filtrados: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PAISES:
      return {
        ...state,
        paises: action.value,
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
      };
    default:
      return state;
  }
}

export default reducer;

//.slice(1).slice(0,-1)

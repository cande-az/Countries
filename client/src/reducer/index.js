import {
  GET_PAISES,
  PAIS_DETALLE,
  FILTER_CONTINENTE,
  ORDER_NOMBRE,
  ORDER_POBLACION,
  FILTER_CONTINENTE_ORDEN_NAME,
  FILTER_CONTINENTE_ORDEN_POB,
  FILTER_SEARCH,
  SELECT_PAIS,
  FILTER_ACTIVIDAD,
  GET_ACTIVIDADES,
} from "../actions/actions-names";

const initialState = {
  paises: [],
  detallePais: [],
  busqTerm: "",
  buscando: "",
  paisesSelect: [],
  actividades: [],
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
    case SELECT_PAIS:
      return {
        ...state,
        paisesSelect: action.value,
      };
    case FILTER_SEARCH:
      return {
        ...state,
        paises: action.value,
      };
    case FILTER_ACTIVIDAD:
      return {
        ...state,
        paises: action.value,
      };
    case GET_ACTIVIDADES:
      return {
        ...state,
        actividades: action.value,
      };

    //FILTROS
    case FILTER_CONTINENTE:
      return {
        ...state,
        paises: action.value,
      };
    case FILTER_CONTINENTE_ORDEN_POB:
      let paisesN = action.value;
      let paisContPob =
        action.orden === "Asc-Poblacion"
          ? paisesN.sort(function (paisA, paisB) {
              if (paisA.poblacion < paisB.poblacion) {
                return 1;
              }
              if (paisA.poblacion > paisB.poblacion) {
                return -1;
              }
              return 0;
            })
          : paisesN.sort(function (paisA, paisB) {
              if (paisA.poblacion > paisB.poblacion) {
                return 1;
              }
              if (paisA.poblacion < paisB.poblacion) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        paises: paisContPob,
      };

    case FILTER_CONTINENTE_ORDEN_NAME:
      let paisesP = action.value;
      let paisContNom =
        action.orden === "Asc-Nombre"
          ? paisesP.sort(function (paisA, paisB) {
              if (paisA.nombre < paisB.nombre) {
                return 1;
              }
              if (paisA.nombre > paisB.nombre) {
                return -1;
              }
              return 0;
            })
          : paisesP.sort(function (paisA, paisB) {
              if (paisA.nombre > paisB.nombre) {
                return 1;
              }
              if (paisA.nombre < paisB.nombre) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        paises: paisContNom,
      };

    case ORDER_NOMBRE:
      //ordenamiento por nombre
      let paisesOrdenadosNOM =
        action.value === "Asc-Nombre"
          ? state.paises.sort(function (paisA, paisB) {
              if (paisA.nombre < paisB.nombre) {
                return 1;
              }
              if (paisA.nombre > paisB.nombre) {
                return -1;
              }
              return 0;
            })
          : state.paises.sort(function (paisA, paisB) {
              if (paisA.nombre > paisB.nombre) {
                return 1;
              }
              if (paisA.nombre < paisB.nombre) {
                return -1;
              }
              return 0;
            });

      return {
        ...state,
        paises: paisesOrdenadosNOM,
      };

    case ORDER_POBLACION:
      //ordenamiento por poblacion
      let paisesOrdenadosPOB =
        action.value === "Asc-Poblacion"
          ? state.paises.sort(function (paisA, paisB) {
              if (paisA.poblacion < paisB.poblacion) {
                return 1;
              }
              if (paisA.poblacion > paisB.poblacion) {
                return -1;
              }
              return 0;
            })
          : state.paises.sort(function (paisA, paisB) {
              if (paisA.poblacion > paisB.poblacion) {
                return 1;
              }
              if (paisA.poblacion < paisB.poblacion) {
                return -1;
              }
              return 0;
            });

      return {
        ...state,
        paises: paisesOrdenadosPOB,
      };

    default:
      return state;
  }
}

export default reducer;

//.slice(1).slice(0,-1)

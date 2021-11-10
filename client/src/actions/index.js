import {
  GET_PAISES,
  PAIS_DETALLE,
  FILTER_CONTINENTE,
  ORDER_NOMBRE,
  ORDER_POBLACION,
  FILTER_SEARCH,
  SELECT_PAIS,
  FILTER_ACTIVIDAD,
  GET_ACTIVIDADES,
} from "../actions/actions-names";

//Agregar paises
export function addPaises(paises) {
  return {
    type: GET_PAISES,
    value: paises,
  };
}

export function axiosPaises(setLoading) {
  //crear funcion axios para traer datos de la base de datos
  return (dispatch) => {
    if (setLoading) setLoading(true);
    fetch("http://localhost:3004/api/countries/")
      .then((response) => response.json())
      .then((paises) => {
        dispatch(addPaises(paises));
        if (setLoading) setLoading(false);
      });
  };
}

//Pais detalle
export function paisDetalle(pais) {
  return {
    type: PAIS_DETALLE,
    value: pais,
  };
}

export function fetchPais(id, setCargando) {
  //crear funcion axios para traer datos de la base de datos
  setTimeout(function () {
    setCargando(false);
  }, 250);
  return (dispatch) => {
    fetch(`http://localhost:3004/api/countries/${id}`)
      .then((response) => response.json())
      .then((pais) => {
        dispatch(paisDetalle(pais[0]));
      });
  };
}

//Filtros del back

export function addPaisesFilter(paises) {
  return {
    type: FILTER_CONTINENTE,
    value: paises,
  };
}

export function fetchFilterContinente(
  continente,
  orden = false,
  ordenado = false
) {
  if (continente === "desac" || continente === "all") {
    axiosPaises();
  }
  return (dispatch) => {
    fetch(`http://localhost:3004/api/countries?continent=${continente}`)
      .then((response) => response.json())
      .then((paises) => {
        if (orden) {
          if (ordenado.includes("Nombre")) {
            dispatch(orderNombre(ordenado, paises));
          } else if (ordenado.includes("Poblacion")) {
            dispatch(orderPoblacion(ordenado, paises));
          }
        } else {
          dispatch(addPaisesFilter(paises));
        }
      });
  };
}

//Ordenamiento

//Nombre Pais
export function orderNombre(tipo, paises = false) {
  //si orden es descativado se llama la lista inicial
  return {
    type: ORDER_NOMBRE,
    orden: tipo,
    value: paises,
  };
}

//Poblacion Pais
export function orderPoblacion(tipo, paises = false) {
  return {
    type: ORDER_POBLACION,
    orden: tipo,
    value: paises,
  };
}

//Busqueda
export function addPaisesSearch(paises) {
  return {
    type: FILTER_SEARCH,
    value: paises,
  };
}

export function fetchFilterName(name) {
  return (dispatch) => {
    fetch(`http://localhost:3004/api/countries?name=${name}`)
      .then((response) => response.json())
      .then((paises) => {
        dispatch(addPaisesSearch(paises));
      });
  };
}

//Crear Actividad
export function modifiPaisSelect(paises) {
  return {
    type: SELECT_PAIS,
    value: paises,
  };
}

//Filtro Actividades
export function fetchFilterActivity(
  activity,
  setLoading,
  continente = false,
  orden = false
) {
  setLoading(true);
  if (continente) {
    return (dispatch) => {
      fetch(
        `http://localhost:3004/api/countries?activity=${activity}&continent=${continente}`
      )
        .then((response) => response.json())
        .then((paises) => {
          if (orden) {
            if (orden.includes("Nombre")) {
              dispatch(orderNombre(orden, paises));
            } else if (orden.includes("Poblacion")) {
              dispatch(orderPoblacion(orden, paises));
            }
          } else if (orden === "desc") {
            dispatch(actividadesFilter(paises));
          } else {
            dispatch(actividadesFilter(paises));
          }
        })
        .then(() => {
          setLoading(false);
        });
    };
  } else {
    return (dispatch) => {
      fetch(`http://localhost:3004/api/countries?activity=${activity}`)
        .then((response) => response.json())
        .then((paises) => {
          if (orden) {
            if (orden.includes("Nombre")) {
              dispatch(orderNombre(orden, paises));
            } else if (orden.includes("Poblacion")) {
              dispatch(orderPoblacion(orden, paises));
            }
          } else if (orden === "desc") {
            dispatch(actividadesFilter(paises));
          } else {
            dispatch(actividadesFilter(paises));
          }
        })
        .then(() => {
          setLoading(false);
        });
    };
  }
}

export function fetchTodasActividades() {
  return (dispatch) => {
    fetch(`http://localhost:3004/api/activity/`)
      .then((response) => response.json())
      .then((paises) => {
        dispatch(todasActividades(paises));
      });
  };
}

export function actividadesFilter(paises) {
  return {
    type: FILTER_ACTIVIDAD,
    value: paises,
  };
}

export function todasActividades(actividades) {
  return {
    type: GET_ACTIVIDADES,
    value: actividades,
  };
}

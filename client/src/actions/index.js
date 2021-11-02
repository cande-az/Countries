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
  GET_ACTIVIDADES
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

export function addPaisesFilterOrden(paises, ordenado) {
  if (ordenado.includes("Nombre")) {
    return {
      type: FILTER_CONTINENTE_ORDEN_NAME,
      value: paises,
      orden: ordenado,
    };
  }
  if (ordenado.includes("Poblacion")) {
    return {
      type: FILTER_CONTINENTE_ORDEN_POB,
      value: paises,
      orden: ordenado,
    };
  }
}

export function fetchFilterContinente(continente, orden = false, ordenado) {
  if (continente === "desac") {
    return orderNombre(ordenado);
  } else {
    return (dispatch) => {
      fetch(`http://localhost:3004/api/countries?continent=${continente}`)
        .then((response) => response.json())
        .then((paises) => {
          if (orden) {
            dispatch(addPaisesFilterOrden(paises, ordenado));
          } else {
            dispatch(addPaisesFilter(paises));
          }
        });
    };
  }
}

//Ordenamiento

//Nombre Pais
export function orderNombre(tipo) {
  return {
    type: ORDER_NOMBRE,
    value: tipo,
  };
}

//Poblacion Pais
export function orderPoblacion(tipo) {
  return {
    type: ORDER_POBLACION,
    value: tipo,
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
export function fetchFilterActivity(activity) {
  return (dispatch) => {
    fetch(`http://localhost:3004/api/countries?activity=${activity}`)
      .then((response) => response.json())
      .then((paises) => {
        dispatch(actividadesFilter(paises));
      });
  };
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

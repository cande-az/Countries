import {
  GET_PAISES,
  PAIS_DETALLE,
  FILTER_CONTINENTE,
  ORDER_NOMBRE,
  ORDER_POBLACION,
  FILTER_CONTINENTE_ORDEN_NAME,
  FILTER_CONTINENTE_ORDEN_POB,
  FILTER_NAME
} from "../actions/actions-names";

//Auxiliares
let continenteSET = "";

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
    setLoading(true);
    fetch("http://localhost:3004/api/countries/")
      .then((response) => response.json())
      .then((paises) => {
        dispatch(addPaises(paises));
        setLoading(false);
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

export function fetchPais(id) {
  //crear funcion axios para traer datos de la base de datos
  return (dispatch) => {
    fetch(`http://localhost:3004/api/countries/${id}`)
      .then((response) => response.json())
      .then((pais) => {
        dispatch(paisDetalle(pais));
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

export function addPaisesFilterOrden(paises,ordenado) {
  if(ordenado.includes("Nombre")){
    return {
      type: FILTER_CONTINENTE_ORDEN_NAME,
      value: paises,
      orden:ordenado
    };
  }
  if(ordenado.includes("Poblacion")){
    return {
      type: FILTER_CONTINENTE_ORDEN_POB,
      value: paises,
      orden:ordenado
    };
  }

}

export function fetchFilterContinente(continente,orden=false,ordenado) {
    return (dispatch) => {
      fetch(`http://localhost:3004/api/countries?continent=${continente}`)
        .then((response) => response.json())
        .then((paises) => {
          if(orden){dispatch(addPaisesFilterOrden(paises,ordenado))}
          else{dispatch(addPaisesFilter(paises))}
        });
    };
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

//descativar orden
export function desacOrden() {
  if (continenteSET) {
    return fetchFilterContinente(continenteSET);
  } else {
    return axiosPaises();
  }
}


//Busqueda
export function addPaisesSearch(paises) {
  return {
    type: FILTER_NAME,
    value: paises,
  };
}

export function fetchFilterName(name) {
  return (dispatch) => {
    fetch(`http://localhost:3004/api/countries?name=${name}`)
      .then((response) => response.json())
      .then((paises) => {
        dispatch(addPaisesSearch(paises))
      });
  };
}
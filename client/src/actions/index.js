import {
  GET_PAISES,
  PAIS_DETALLE,
  FILTER_BACK,
  BUSQUEDA
} from "../actions/actions-names";

//Agregar paises
export function addPaises(paises) {
  return {
    type: GET_PAISES,
    value: paises,
  };
}

export function axiosPaises() {
  //crear funcion axios para traer datos de la base de datos
  return (dispatch) => {
    fetch("http://localhost:3004/api/countries/")
      .then((response) => response.json())
      .then((paises) => {
        dispatch(addPaises(paises));
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

export function filterBack(paises) {
  return {
    type: FILTER_BACK,
    value: paises,
  };
}

export function fetchFilterContinente(continente) {
  //crear funcion axios para traer datos de la base de datos
 /*  let url = [];
  if (name !== false) url.push(`name=${name}`);
  if (continente !== false) url.push(`continent=${continente}`);
  let urlString = url.toString().replaceAll(",", "&") */

  return (dispatch) => {
    fetch(
      `http://localhost:3004/api/countries?continent=${continente}`
    )
      .then((response) => response.json())
      .then((paises) => {
        console.log(paises)
        dispatch(filterBack(paises));
      });
  };
}

//Busqueda
export function setBusqueda(busqueda) {
  return {
    type: BUSQUEDA,
    value: busqueda,
  };
}
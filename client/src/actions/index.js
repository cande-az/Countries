import axios from "axios"
import { GET_PAISES } from "../actions/actions-names"

export async function addPaises() {
    //crear funcion axios para traer datos de la base de datos

    return function (dispatch) {
        return fetch(`http://localhost:3004/api/countries/`)
            .then((response) => response.json())
            .then((json) => {
                dispatch({ type: GET_PAISES, value: json });
            });
    };
}
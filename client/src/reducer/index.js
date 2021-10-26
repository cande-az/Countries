import {GET_PAISES} from "../actions/actions-names"

const initialState = {
    paises: [],
}

function reducer (state= initialState,action){
    switch (action.type){
        case GET_PAISES:
            return {
                ...state,
                paises: action.value
            }
        default: return state;
    }
}

export default reducer;
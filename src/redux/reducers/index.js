import { FETCH_ACTOR } from '../actions/index'
const initialState = {
    actor: null,
}

const reducerActors = (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_ACTOR:
            return{
                ...state,
                actor: action.payload
            };
        default:
            return state;
    }
}

export default reducerActors;
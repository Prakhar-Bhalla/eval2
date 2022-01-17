import { ADD_JOBS, GET_JOBS } from "./actionType";

export const reducer = (state = {jobs : []}, {type,payload}) => {
    switch(type) {
        case ADD_JOBS : return {...state, jobs : [...state.jobs, payload]};
        case GET_JOBS : return {...state, jobs : payload};
        default : return state
    }
}
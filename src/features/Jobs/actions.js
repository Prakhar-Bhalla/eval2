import { ADD_JOBS, GET_JOBS } from "./actionType";

export const addJobs = (data) => ({
    type : ADD_JOBS, 
    payload : data
});

export const getJobs = (data) => ({
    type : GET_JOBS,
    payload : data
})


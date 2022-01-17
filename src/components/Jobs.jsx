
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getJobs } from "../features/Jobs/actions";

export const Jobs = () => {
    const jobs = useSelector(state => {return state.jobs});
    const dispatch = useDispatch();
    useEffect(() => {
         getDataJobs();
    },[jobs])

     const getDataJobs = async() => {
        let res = await fetch(" http://localhost:3005/jobs");
        let data = await res.json();
        dispatch(getJobs(data));
    }


    return <p>{jobs.companyName}</p>
}
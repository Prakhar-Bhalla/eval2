import { useState } from "react"
import { useDispatch } from "react-redux";
import { addJobs, getJobs } from "../features/Jobs/actions";

export const JobPosting = () => {
    const[jobData, setJobData] = useState({companyName : "", jobTitle : "", salaryRange : "", jobDesc : "", location : "", jobType : ""});
    const handleJobData = (event) => {
        let {name, value} = event.target;
        setJobData({...jobData,
            [name] : value,
        })
    }
    const dispatch = useDispatch();

    const addData = async() => {
        try {
            let res = await fetch(" http://localhost:3005/jobs", {
            method : "POST",
            body : JSON.stringify(jobData),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        } catch(e) {

        }
        dispatch(addJobs(jobData));
        getDataJobs();
    }

    const getDataJobs = async() => {
        let res = await fetch(" http://localhost:3005/jobs");
        let data = await res.json();
        dispatch(getJobs(data));
    }


    return <div style={{width : "120px"}}>
    <input placeholder="Company Name" name = "companyName" onChange={handleJobData}/>
    <input placeholder="Job Title" name = "jobTitle" onChange={handleJobData}/>
    <input placeholder="Salary Range" name = "salaryRange" onChange={handleJobData}/>
    <input placeholder="Job Description" name = "jobDesc" onChange={handleJobData}/>
    <input placeholder="Location" name = "location" onChange={handleJobData}/>
    <input placeholder="Job Type" name = "jobType" onChange={handleJobData}/>
    <button onClick={addData}>Post</button>
    </div>
}
import { parse } from "postcss";

const getStoredJobApplication = () =>{
    const StoredJobApplication = localStorage.getItem('jobApplications');
    if(StoredJobApplication){
        return JSON.parse(StoredJobApplication);
    }
    return [];
}

const saveJobApplication = id =>{
    const storedJobApplication = getStoredJobApplication();
    const exists = storedJobApplication.find(jobId => jobId === parseInt(id));
    if(!exists){
        storedJobApplication.push(parseInt(id));
        localStorage.setItem('jobApplications', JSON.stringify(storedJobApplication));
    }
}
export {getStoredJobApplication, saveJobApplication};
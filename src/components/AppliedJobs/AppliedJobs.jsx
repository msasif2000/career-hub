import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";
import AppliedJobDetails from "../AppliedJobDetails/AppliedJobDetails";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied  = jobs.filter(job => storedJobIds.includes(job.id)) 
            // console.log(jobs, jobsApplied);
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied);
        }
    }, [])

    return (
        <div>
            <h2 className="text-4xl text-center py-16">Applied Jobs</h2>

            <details className="dropdown mb-32">
                <summary className="m-1 btn bg-slate-300">Filter</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a>Full Time</a></li>
                    <li><a>Remote</a></li>
                    <li><a>Onsite</a></li>
                </ul>
            </details>

            <div>
                {
                    appliedJobs.map(job => <AppliedJobDetails key={job.id} job={job}></AppliedJobDetails>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;
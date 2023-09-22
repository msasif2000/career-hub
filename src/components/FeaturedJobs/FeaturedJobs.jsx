import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(red => red.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div>
                <h2 className="text-4xl text-center">Featured Jobs</h2>
                <p className='text-center mt-1'>Explore thousands of job opportunities with all the information  you need. It`s your future</p>
            </div>
            <div className="md:container mx-auto px-24 grid grid-cols-2 gap-8 py-8">
                {
                    jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary flex mx-auto mb-8">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;
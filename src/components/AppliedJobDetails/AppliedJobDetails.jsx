import { PropTypes } from 'prop-types';
import { CiLocationOn, CiBadgeDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const AppliedJobDetails = ({ job }) => {
    //console.log(job)
    return (
        <div className='md:container mx-auto'>
            <div className='flex gap-4 border border-slate-300  p-6 mb-2 items-center'>
                <div className='w-1/5'>
                    <img className='bg-slate-200 px-4 py-8 w-2/3 h-3/4' src={job.logo} alt="" />
                </div>
                <div className='w-3/5'>
                    <h3 className='font-bold'>{job.job_title}</h3>
                    <p className='text-xl'>{job.company_name}</p>
                    <div className="flex gap-6 py-2">
                        <button className="bg-slate-200 p-2 rounded-xl border border-blue-600 text-blue-700 font-semibold hover:bg-white">{job.remote_or_onsite}</button>
                        <button className="bg-slate-200 p-2 rounded-xl border border-blue-600  text-blue-700 font-semibold hover:bg-white">{job.job_type}</button>
                    </div>
                    <div className="my-2 flex gap-20 text-xl">
                        <h2 className="flex items-center"><CiLocationOn className="text-xl mr-1"></CiLocationOn>{job.location}</h2>
                        <h2 className="flex items-center"><CiBadgeDollar className="text-xl mr-1"></CiBadgeDollar>{job.salary}</h2>
                    </div>
                </div>

                <div className="card-actions w-1/5">
                    <Link to={`/job/${job.id}`}><button className="btn text-white hover:text-black  bg-blue-500">View Details</button></Link>
                </div>

            </div>
        </div>
    );
};

AppliedJobDetails.propTypes = {
    job: PropTypes.object.isRequired
}

export default AppliedJobDetails;
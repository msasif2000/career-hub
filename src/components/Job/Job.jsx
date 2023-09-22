import { CiLocationOn, CiBadgeDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import {PropTypes} from 'prop-types';

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl py-8 px-6">
                <figure><img src={logo} alt="card" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className="flex gap-6">
                        <button className="bg-white p-2 rounded-xl border border-blue-600 text-blue-700 font-semibold hover:bg-slate-200">{remote_or_onsite}</button>
                        <button className="bg-white p-2 rounded-xl border border-blue-600  text-blue-700 font-semibold hover:bg-slate-200">{job_type}</button>
                    </div>
                    <div className="my-2 flex gap-20 text-xl">
                        <h2 className="flex items-center"><CiLocationOn className="text-xl mr-1"></CiLocationOn>{location}</h2>
                        <h2 className="flex items-center"><CiBadgeDollar className="text-xl mr-1"></CiBadgeDollar>{salary}</h2>
                    </div>
                    <div className="card-actions">
                        <Link to={`/job/${id}`}><button className="btn text-white hover:text-black  bg-blue-500">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired
}
export default Job;
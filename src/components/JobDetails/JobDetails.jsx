import {PropTypes} from 'prop-types';
import { useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn, CiBadgeDollar } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const job = jobs.find(job => job.id == id)
    //console.log(job);
    //console.log(job.job_description)

    const handleApplyJob =() => {
        saveJobApplication(id);
        toast.success('Successfully Applied', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
        })
    }
    return (
        <div className="md:container mx-auto px-16">
            <h2 className="text-4xl text-center my-16">Job details</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className=" md:col-span-3">
                    <p><span className="font-bold">Job Description: </span> {job.job_description}</p>
                    <br />
                    <p><span className="font-bold">Job Responsibility: </span> {job.job_responsibility}</p>
                    <br />
                    <p><span className="font-bold">Educational Requirements: </span> <br />  <br />{job.educational_requirements}</p>
                    <br />
                    <p><span className="font-bold">Experience: </span> <br />  <br />{job.experiences}</p>
                </div>
                <div>
                    <div className="bg-blue-200 rounded-xl">
                        <h3 className="mx-2 p-4 border-b-2 font-bold border-slate-400">Job Details</h3>
                        <p className="flex items-center p-2 pt-4"><CiBadgeDollar className="text-blue-700 text-xl mr-2"></CiBadgeDollar><span className="font-bold">Salary:  </span>{job.salary}</p>
                        <p className="flex items-center p-2"><MdWorkOutline className="text-blue-700 text-xl mr-2"></MdWorkOutline><span className="font-bold">Job Title:  </span>{job.job_title}</p>
                        <h3 className="mx-2 p-4 border-b-2 font-bold border-slate-400">Contact Information</h3>
                        <p className="flex items-center p-2"><BsTelephone className="text-blue-700 text-xl mr-2"></BsTelephone><span className="font-bold">Phone:  </span>{job.contact_information.phone}</p>
                        <p className="flex items-center p-2"><AiOutlineMail className="text-blue-700 text-xl mr-2"></AiOutlineMail><span className="font-bold">Email:  </span>{job.contact_information.email}</p>
                        <p className="flex place-items-start p-2 pb-6"><CiLocationOn className="text-blue-700 text-3xl mr-2"></CiLocationOn><span className="font-bold">Address:  </span>{job.contact_information.address}</p>
                    </div>
                    <div>
                        <button onClick={handleApplyJob} className="mt-2 btn bg-blue-500 w-full text-white">Apply Now</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

JobDetails.propTypes = {
    jobs: PropTypes.array.isRequired,

}


export default JobDetails;
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-center mx-auto mt-24 text-2xl font-semibold">Oops!...Page Error</h2>
            <button className="mx-auto mt-8 bg-slate-800 text-white p-2 rounded-xl text-2xl font-semibold flex justify-center"><Link to="/">Home</Link></button>
        </div>
    );
};

export default ErrorPage;
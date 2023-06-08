import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddJob() {
  const { companyId } = useParams();
  const [job, setJob] = useState({
      companyID: companyId,
      title: '',
      address: '',
      postedOn: Date.now(),
      totalVacancies: 0,
      jobDesc: '',
      duties: '',
      perks: '',
      qualifications: '',
      accommodations: []
  })

    const navigate = useNavigate();

    const onChange = (e) => {
        setJob({ ...job, [e.target.name]: e.target.value });
      };
    
      const onSubmit = async (e) => {
        e.preventDefault();
        try {
          // Send the job data to the server
        const response = await axios.post("http://localhost:5000/api/jobs", job);
        const newJobId = response.data.id; // Assuming the server returns the ID of the newly created job
    
          navigate("/jobs/${newJobId}");
        } catch (error) {
          console.log("Error:", error);
        }
      };
    
      return (
        <div className="form">
          <h1 className="text-2xl font-bold">Create New Job</h1>
          <br />
    
          <form className="text-lg" onSubmit={onSubmit}>
            <label className="block">
              Company ID:
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                            placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                name="companyID"
                value={job.companyID}
                onChange={onChange}
                required
              />
            </label>
            <br />
            <label className="block">
              Title:
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                            placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                name="title"
                value={job.title}
                onChange={onChange}
                required
              />
            </label>
            <br />
            <label className="block">
              Address:
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                            placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                name="address"
                value={job.address}
                onChange={onChange}
                required
              />
            </label>
            <br />
    
            <div className="flex justify-end">
              <input
                type="submit"
                className="p-2.5 px-5 text-lg font-bold text-white bg-blue-700 rounded-xl border hover:bg-teal-800 focus:ring-4
                                    focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                value="Submit"
              />
            </div>
          </form>
        </div>
      );
    }
    
    export default AddJob;
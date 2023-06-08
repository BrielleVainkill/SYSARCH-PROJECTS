import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCompany() {
    
    const [company, setCompany] = useState({
        name: '',
        establishedIn: 2000,
        address: {
            province: '',
            city: '',
            barangay: '',
            details: ''
          },
        description: '',
    })

    const navigate = useNavigate();

    const onChange = (e) => {
        if (e.target.name.startsWith("address.")) {
          const addressField = e.target.name.split(".")[1];
          setCompany((prevCompany) => ({
            ...prevCompany,
            address: {
              ...prevCompany.address,
              [addressField]: e.target.value,
            },
          }));
        } else {
          setCompany((prevCompany) => ({
            ...prevCompany,
            [e.target.name]: e.target.value,
          }));
        }
      };

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
          // Send the job data to the server
          const response = await axios.post("http://localhost:5000/api/companies", company)
          const newCompanyId = response.data.id // Assuming the server returns the ID of the newly created job
    
          navigate(`/companies/${newCompanyId}`)

        } catch (error) {
          console.log("Error:", error)
        }
      }
    
    return (
        <div className="form">
            <h1 className="text-2xl font-bold">Register a Company</h1>
            <br />
            
            <form className="text-lg" onSubmit={onSubmit}>
                <label className="block">
                Company Name:
                    <input
                        type="text"
                        className="mt-1 block w-3/5 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                        placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                        name="name"
                        value={company.name}
                        onChange={onChange}
                        required={true}
                    />
                </label>
                <br />
                <label className="block">
                Established In:
                    <input
                        type="number"
                        className="mx-5 mt-1 w-1/6 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                        placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                        name="establishedIn"
                        max="2999"
                        value={company.establishedIn}
                        onChange={onChange}
                        required={true}
                    />
                </label>
                <br />
                <label>
                Location:
                    <br/>
                    <div className="block">
                        <div className="block flex justify-between">
                            <input
                                type="text"
                                className="mt-1 w-1/3 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                                placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                name="address.province"
                                placeholder="Province"
                                value={company.address.province}
                                onChange={onChange}
                                required={true}
                            />
                            <input
                                type="text"
                                className="mt-1 w-1/3 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                                placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                name="address.city"
                                placeholder="City"
                                value={company.address.city}
                                onChange={onChange}
                                required={true}
                            />
                            <input
                                type="text"
                                className="mt-1 w-1/3 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                                placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                name="address.barangay"
                                placeholder="Barangay"
                                value={company.address.barangay}
                                onChange={onChange}
                                required={true}
                            />
                        </div>
                        <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                                    placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                            name="address.details"
                            placeholder="Details"
                            value={company.address.details}
                            onChange={onChange}
                            required={true}
                        />
                    </div>
                </label>
                <br/>
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



    )

}

export default AddCompany;
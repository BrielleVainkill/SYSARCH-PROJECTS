import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCompany() {
    
    const [Company, setCompany] = useState({
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

    const onChange = (e) => {
        setCompany({ ...Company, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        createCompany({ name, establishedIn , address, description })
      };


    async function addCompany(event) {
        event.preventDefault()
        .post('http://localhost:5000/api', Company)
        .then((res) => {
          setCompany({
            name: '',
            establishedIn: 0,
            address: {
                province: '',
                city: '',
                barangay: '',
                details: ''
              },
            description: '',
          });
  
          navigate('/');
        })
        .catch((err) => {
          console.log("error");
        });
    }
    
    return (
        <div className="form">
            <h1 class="text-2xl font-bold">Register a Company</h1>
            <br />
            
            <form class="text-lg" onSubmit={addCompany}>
                <label class="block">
                Company Name:
                    <input
                        type="text"
                        class="mt-1 block w-3/5 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                        placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                        name="name"
                        value={Company.name}
                        onChange={onChange}
                        required={true}
                    />
                </label>
                <br />
                <label class="block">
                Established In:
                    <input
                        type="number"
                        class="mx-5 mt-1 w-1/6 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                        placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                        name="establishedIn"
                        max="2999"
                        value={Company.establishedIn}
                        onChange={onChange}
                        required={true}
                    />
                </label>
                <br />
                <label>
                Location:
                    <br/>
                    <div class="block">
                        <div class="block flex justify-between">
                            <input
                                type="text"
                                class="mt-1 w-1/3 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                                placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                name="address.province"
                                placeholder="Province"
                                value={Company.address.province}
                                onChange={onChange}
                                required={true}
                            />
                            <input
                                type="text"
                                class="mt-1 w-1/3 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                                placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                name="address.city"
                                placeholder="City"
                                value={Company.address.city}
                                onChange={onChange}
                                required={true}
                            />
                            <input
                                type="text"
                                class="mt-1 w-1/3 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                                placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                name="address.barangay"
                                placeholder="Barangay"
                                value={Company.address.barangay}
                                onChange={onChange}
                                required={true}
                            />
                        </div>
                        <input
                            type="text"
                            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                                    placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                            name="address.details"
                            placeholder="Details"
                            value={Company.address.details}
                            onChange={onChange}
                            required={true}
                        />
                    </div>
                </label>
                <br/>
                <div class="flex justify-end">
                    <input
                        type="submit"
                        class="p-2.5 px-5 text-lg font-bold text-white bg-blue-700 rounded-xl border hover:bg-teal-800 focus:ring-4
                                focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                        value="Submit"
                    />
                </div>
            </form>
        </div>



    )

}

export default AddCompany;
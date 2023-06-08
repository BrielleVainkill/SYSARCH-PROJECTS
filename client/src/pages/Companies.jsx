import React from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from 'react'
import JobItem from "../components/JobItem"
function Companies() {

    const [companies, setCompanies] = useState<{ _id: string }[]>([]);

        useEffect(() => {
            axios
                .get('http://localhost:5000/api')
                .then((res) => {
                    setCompanies(res.data);
                });
        }, [])

        const companiesList = companies.length === 0 ? 'No listings found, make some!' : companies.map((company, k) => (
            <JobItem key={company._id} company={company} />
        ))

    return (    
        <>
            <div className="">
                <div id="company-headings" className="flex justify-between text-lg">
                    <div>Company</div>
                    <div>Established In</div>
                    <div>Address</div> 
                </div>

                {companiesList}
            </div>
        </>

    )
}

export default Companies;
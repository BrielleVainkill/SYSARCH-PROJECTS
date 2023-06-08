import React from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import JobItem from "../components/JobItem"
import Spinner from "../components/Spinner"

function Companies() {

    const { Companies, isLoading} = useSelector(
        (state) => state.tickets
      );

        if (isLoading) return <Spinner />
    return (
        <>
            <div className="">
                <div id="job-headings" className="flex justify-between text-lg">
                    <div>Position</div>
                    <div>Company</div>
                    <div>Location</div>
                    <div>Date</div>
                    <div>Accomodations</div> 
                </div>

                {jobs.map((job) => (
                <JobItem key={job._id} job={job} />
                ))}
            </div>
        </>

    )
}

export default Companies;
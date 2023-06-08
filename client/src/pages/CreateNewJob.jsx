import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateNewJob() {
    
    const [Job, setJob] = useState({
        companyID: useState(company.id),
        title: '',
        address: '',
        postedOn: new Date(),
        totalVacancies: 0,
        jobDesc: '',
        duties: '',
        perks: '',
        qualifications: '',
        acommodations: []
    })





}
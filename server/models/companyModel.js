import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    establishedIn: {
        type: Number,
        min: 0,
        max: 3000,
        required: true
    },
    address: {
        province: {
            type: String,
            required: true
        },
        city: {
            type: String, 
            required: true
        },
        barangay: {
            type: String, 
            required: true
        },
        details: {
            type: String,
            required: false
        }
    },
    description: {
        type: String,
        required: true
    }
})
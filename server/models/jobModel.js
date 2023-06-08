import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    companyID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    postedOn: {
        type: Date,
        required: true,
    },
    totalVacancies: {
        type: Number,
        required: true,
    },
    jobDesc: {
        type: String,
        required: true,
    },
    duties: {
        type: String,
        required: true,
    },
    perks: {
        type: String,
        required: true,
    },
    qualifications: {
        type: String,
        required: true,
    },
    accomodations: {
        type: [String], // Updated to an array of strings
        default: [], // Default value is an empty array
    }
})

// Create a text index on the 'title' and 'description' fields
jobSchema.index({ title: 'text', jobDesc: 'text' });

module.exports = mongoose.model('Job', jobSchema);
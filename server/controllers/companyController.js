const companyModel = require('../models/companyModel')

module.exports = {

    //retrieve ALL companies

    getAllCompanies: async (req, res) => {
        const companies = await companyModel.find({})
        res.status(200).json(companies)
    },

    //searches ALL companies

    searchCompanies: async (req, res) => {
        const searchText = req.query.search; //gets input from search bar

        const companies = await companyModel.find({ $text: { $search: searchText } })
        res.status(200).json(companies)
    },

    //retrieve one company

    getCompany: async (req, res) => {
        const company = await companyModel.findOne({ _id: req.params.id })
        res.status(200).json(company)
    },

    //add new company

    addCompany: async (req, res) => {
        const newCompany = await companyModel.create(req.body)
        res.status(200).json(newCompany)
    },
    
    //update one company

    updateCompany: async (req, res) => {
        const updatedCompany = await companyModel.findByIdAndUpdate(req.params.id)
        res.status(200).json(updatedCompany)
    },

    //delete one company

    deleteCompany: async (req, res) => {
        const deletedCompany = await companyModel.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedCompany)
    }
}
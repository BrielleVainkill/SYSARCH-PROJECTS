const express = require('express')
const router = express.Router()
const companyController = require('../controllers/companyController')

router
    // get routes : show all jerbs and show specific jerbs
    //get all
    .get('/', companyController.getAllCompanies)
    //search all
    .get('/search', companyController.searchCompanies)
    //get one
    .get('/:id', companyController.getCompany)

    // post route: create new jerb
    .post('/', companyController.newCompany)

    // put route: update specific company
    .put('/:id', companyController.updateCompany)

    // delete route: delete specific company
    .delete('/id', companyController.deleteCompany)

module.exports = router

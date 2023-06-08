const express = require('express')
const router = express.Router()
const jobController = require('../controllers/jobController')


router
    // get routes : show all jerbs and show specific jerbs
    .route('/')
    .get(getjobs)

    // post route: create new jerb
    .post('/', jobController.newJob)

    // put route: update specific job
    .put('/:id', jobController.updateJob)

    // delete route: delete specific job
    .delete('/id', jobController.deleteJob)

module.exports = router
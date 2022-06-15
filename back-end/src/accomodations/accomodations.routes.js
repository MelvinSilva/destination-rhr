const express = require('express')
const accomodationController = require('./controllers/accomodation.controller')

const router = express.Router()

router.get('/', accomodationController.getAccomodations)
router.get('/:id_station', accomodationController.getAccomodationByStation)

router.put('/:id', accomodationController.updateAccomodation)

module.exports = router
const express = require('express')
const accomodationController = require('./controllers/accomodation.controller')

const router = express.Router()

router.get('/', accomodationController.listAccomodations)
router.get('/:id_station', accomodationController.listAccomodationByStation)

router.put('/:id', accomodationController.updateAccomodation)

router.delete('/:id', accomodationController.deleteAccomodation)

module.exports = router
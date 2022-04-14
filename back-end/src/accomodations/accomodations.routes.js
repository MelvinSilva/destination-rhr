const express = require('express')
const accomodationController = require('./controllers/accomodation.controller')

const router = express.Router()

router.get('/', accomodationController.listAccomodations)
router.put('/:id', accomodationController.updateAccomodation)
router.delete('/:id', accomodationController.deleteAccomodation)

module.exports = router
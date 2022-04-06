const express = require('express')
const accomodationController = require('./controllers/accomodations.controller')

const router = express.Router()

router.get('/', accomodationController.readAccomodations)
router.put('/:id', accomodationController.updateAccomodations)
module.exports = router
const express = require('express')
const stationController = require('./controllers/station.controller')

const router = express.Router()

router.get('/', stationController.getStations)

module.exports = router
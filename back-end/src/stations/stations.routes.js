const express = require('express')
const stationController = require('./controllers/stations.controller')

const router = express.Router()

router.get('/', stationController.readStations)
module.exports = router
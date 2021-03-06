const express = require('express')
const storeController = require('./controllers/store.controller')

const router = express.Router()

router.get('/', storeController.getAllStores)

router.get('/:id_station', storeController.getStore)

module.exports = router
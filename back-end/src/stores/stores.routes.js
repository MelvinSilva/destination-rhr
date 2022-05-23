const express = require('express')
const storeController = require('./controllers/store.controller')

const router = express.Router()

router.get('/', storeController.getAllStores)

router.get('/:id_station', storeController.getStore)

router.put('/:id', storeController.updateStore)

router.delete('/:id', storeController.deleteStore)

module.exports = router
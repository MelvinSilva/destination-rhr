const express = require('express')
const storeController = require('./controllers/store.controller')

const router = express.Router()

router.get('/', storeController.listStores)
router.get('/:id_station', storeController.listStoreStation)
router.put('/:id', storeController.updateStore)
router.delete('/:id', storeController.deleteStore)
module.exports = router
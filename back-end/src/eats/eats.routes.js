const express = require('express')
const eatController = require('./controllers/eat.controller')

const router = express.Router()

router.get('/', eatController.listEats)

router.get('/:id_station', eatController.listEatStation)

// router.put('/:id', eatController.update)

// router.delete('/:id', eatController.delete)

module.exports = router
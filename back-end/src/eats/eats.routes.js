const express = require('express')
const eatController = require('./controllers/eat.controller')

const router = express.Router()

router.get('/', eatController.listEats)
router.put('/:id', eatController.updateEat)
router.delete('/:id', eatController.deleteEat)
module.exports = router
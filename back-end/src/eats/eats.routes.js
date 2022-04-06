const express = require('express')
const eatController = require('./controllers/eats.controller')

const router = express.Router()

router.get('/', eatController.readEats)
router.put('/:id', eatController.updateEats)
module.exports = router
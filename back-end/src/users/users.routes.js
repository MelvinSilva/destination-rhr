const express = require('express')
const userController = require('./controllers/users.controller')

const router = express.Router()

router.get('/', userController.readUsers)
router.put('/:id', userController.updateUsers)
router.post('/', userController.createUsers)
router.delete('/:id', userController.deleteUsers)
module.exports = router
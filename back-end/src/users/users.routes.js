const express = require('express')
const userController = require('./controllers/users.controller')
const userMiddleware = require('./middlewares/users.middleware')
const router = express.Router()

router.get('/', userController.readUsers)
router.put('/:id', userController.updateUsers)
router.post('/',[
    userMiddleware.checkSignIn,
    userMiddleware.checkEmail,
    userMiddleware.checkLogin, 
    userController.createUsers] )
router.delete('/:id', userController.deleteUsers)

module.exports = router
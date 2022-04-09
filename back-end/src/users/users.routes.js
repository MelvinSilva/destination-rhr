const express = require('express')
const authController = require('./controllers/auth.controller')
const userController = require('./controllers/users.controller')
const userMiddleware = require('./middlewares/users.middleware')
const router = express.Router()


router.post('/login', [userMiddleware.checkLoginAuth, authController.signIn])
router.get('/', userController.readUsers)
router.put('/:id', userController.updateUsers)
router.post('/',[
    userMiddleware.checkSignUp,
    userMiddleware.checkEmailExist,
    userMiddleware.checkLoginExist, 
    userController.createUsers] )
router.delete('/:id', userController.deleteUsers)

module.exports = router
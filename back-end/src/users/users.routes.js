const express = require('express')
const authController = require('./controllers/auth.controller')
const userController = require('./controllers/users.controller')
const authMiddleware = require('./middlewares/auth.middleware')
const router = express.Router()


router.post('/login', [authMiddleware.checkAuthUser, authController.signIn])
router.post('/register',[
    authMiddleware.checkFormRegister,
    authMiddleware.checkEmailUsed,
    authMiddleware.checkLoginUsed, 
    authController.signUp] )
router.get('/', userController.listUsers)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

module.exports = router
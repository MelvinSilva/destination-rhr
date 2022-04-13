const authModel = require('../models/auth.model')
const jwt = require('jsonwebtoken')
const argon2 = require('argon2')

const timeToken = "1d"
const createToken = (login) => {
    return jwt.sign({ login }, process.env.TOKEN_SECRET, { expiresIn: timeToken })
}

class AuthController {

    //******** S'INSCRIRE ********//
    async signUp(req, res) {
        try {
            req.body.password = await argon2.hash(req.body.password) // mdp crypté
            req.body.profil_user = "user"
            const newUser = req.body
            const signUp = await authModel.createUsers(newUser)
            res.status(200).send(signUp)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    //******** SE CONNECTER ********//
    async signIn(req, res) {

        try {
            const { login, password } = req.body
            const user = await authModel.loginUsers(login, password)
            const token = createToken(user.login)
            res.cookie('jwt-token', token, { httpOnly: true, timeToken })
            res.status(200).send({ message: `${user[0].firstname} est connecté` })
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
}

module.exports = new AuthController()
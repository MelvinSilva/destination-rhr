const authModel = require('../models/auth.model')
const jwt = require('jsonwebtoken')
const argon2 = require('argon2')

const createToken = (id) => {
    return jwt.sign({ id }, process.env.TOKEN_SECRET, {
      
    })
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
            const token = createToken(user.id)
            res.cookie('jwt-token', token, { httpOnly: true })
            res.status(200).send(`${req.body.login} est connecté`)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
}

module.exports = new AuthController()
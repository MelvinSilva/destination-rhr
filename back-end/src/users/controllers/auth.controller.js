const authModel = require('../models/auth.model')
const jwt = require('jsonwebtoken')
const argon2 = require('argon2')

const maxAge = 24 * 60 * 1000 // calcul de la duree du token (24 minutes)

class AuthController {

    //******** S'INSCRIRE ********//
    async signUp(req, res) {
        try {
            req.body.password = await argon2.hash(req.body.password) // mdp crypté
            req.body.profil_user = "user"
            const newUser = req.body
            const signUp = await authModel.createUser(newUser)
            res.status(200).send(signUp)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    //******** SE CONNECTER ********//
    async signIn(req, res) {
        try {
            const { login } = req.body
            const { firstname, lastname, profil_user} = await authModel.loginUser(login) // A VERIFIER
            const token = jwt.sign({ login, profil_user, firstname, lastname, profil_user }, process.env.TOKEN_SECRET, { expiresIn: maxAge})
            res.cookie('jwt-token', token, { httpOnly: true, maxAge})
            res.status(200).send(token)
            
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
}

module.exports = new AuthController()
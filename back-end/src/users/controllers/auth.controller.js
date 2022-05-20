const authModel = require('../models/auth.model')
const jwt = require('jsonwebtoken')
const argon2 = require('argon2')



const maxAge = 24 * 60 * 1000 // calcul de la duree du token (24 minutes)

const maxAgeLogOut  = 1 // calcul 1 miniseconde pour le logout

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
            res.cookie('user_token', token, { httpOnly: true, maxAge})
            res.status(200).send(token)
            
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async reconnect (req, res) {
        const token = req.cookies.user_token // on recupere le cookie user_token qui à été généré lors du signIn
        res.status(200).send(token) // on renvoie dans la reponse le cookie qui contient le token
    }

       //******** SE DECONNECTER ********//

       async logout (req, res) {
        try {
            const token = jwt.sign({}, process.env.TOKEN_SECRET, { expiresIn: maxAgeLogOut})
            res.cookie('user_token', token, { httpOnly: true, maxAge:maxAgeLogOut})
            res.status(200).send(token)
            
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }   

    
}

module.exports = new AuthController()
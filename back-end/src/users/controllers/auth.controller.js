const userModel = require('../models/users.model')
const jwt = require('jsonwebtoken')

const maxAge = '30000' // duree du token 30 secondes
const createToken = (id) => {
    return jwt.sign({ id }, process.env.TOKEN_SECRET, {
        expiresIn: maxAge
    })
}

class AuthController {

    async signIn(req, res) {


        try {
            const { login, password} = req.body
            const user = await userModel.loginUsers(login, password)
            const token = createToken(user.id)
            res.cookie('jwt', token, { httpOnly: true, maxAge })
            res.status(200).send(`${req.body.login} is connected`)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
}

module.exports = new AuthController()
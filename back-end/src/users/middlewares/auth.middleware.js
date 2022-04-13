const argon2 = require('argon2');
const Joi = require('joi');
const { joiPassword } = require('joi-password')
const authModel = require('../models/auth.model')
// On utilise en destructuring connection pour aller le chercher dans le model users.model.js
// afin de l'utiliser ensuite sur notre connection.query 

class UsersMiddleware {

    checkFormRegister(req, res, next) {
        const { lastname, firstname, email, login, password, } = req.body;
        const { error } = Joi.object({
            lastname: Joi.string().min(3).required(),
            firstname: Joi.string().min(3).required(),
            email: Joi.string().email().required(),
            login: Joi.string().min(8).max(8).required(),
            password: joiPassword
                .string()
                .min(8)
                .minOfUppercase(1)
                .minOfSpecialCharacters(1)
                .minOfNumeric(1)
                .required(),
        }).validate({ lastname, firstname, email, login, password }, { abortEarly: false })

        if (error) {
            res.status(422).json({ validationErrors: error.details })
        } else {
            next()
        }
    }

    async checkEmailUsed(req, res, next) {

        try {
            const user = await authModel.verifyEmail(req.body.email)
            console.log(user)
            if (user.length > 0) {
                res.status(409).send({ error: "Email existe déja" })
            } else {
                next()

            }

        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async checkLoginUsed(req, res, next) {

        try {
            const user = await authModel.verifyLogin(req.body.login)
            console.log(user)
            if (user.length > 0) {
                res.status(409).send({ error: "Login existe déja" })
            } else {
                next()

            }

        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async checkAuthUser(req, res, next) {

        try {
            const user = await authModel.verifyAuthUser(req.body.login)
            if (user) {
                if (await argon2.verify(user.password, req.body.password)) {
                    next()
                } else {
                    res.status(404).send({ error: "L'identifiant et/ou le mot de passe sont invalides" })
                }
            } else {
                res.status(404).send({ error: "L'identifiant et/ou le mot de passe sont invalides"})
            }
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

}

module.exports = new UsersMiddleware()
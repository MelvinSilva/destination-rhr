const argon2 = require('argon2');
const Joi = require('joi');
const {
    joiPassword
} = require('joi-password')
const authModel = require('../models/auth.model')


class UsersMiddleware {

    checkFormRegister(req, res, next) {
        const {
            lastname,
            firstname,
            email,
            login,
            password,
        } = req.body;

        const {
            error
        } = Joi.object({
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
        }).validate({
            lastname,
            firstname,
            email,
            login,
            password
        }, {
            abortEarly: false
        })

        if (error) {
            res.status(422).send({
                error: error.message
            })
        } else {
            next()
        }
    }

    async checkEmailUsed(req, res, next) {

        try {
            const email = await authModel.verifyEmail(req.body.email)
            if (email.length > 0) {
                res.status(409).send({
                    error: "L'email existe déja"
                })
            } else {
                next()

            }

        } catch (error) {
            res.status(500).send({
                error: error.message
            })
        }
    }

    async checkIdUsed(req, res, next) {

        try {
            const id = await authModel.verifyId(req.body.login)
            if (id.length > 0) {
                res.status(409).send({
                    error: "L'identifiant existe déja"
                })
            } else {
                next()

            }

        } catch (error) {
            res.status(500).send({
                error: error.message
            })
        }
    }

    async checkLogin(req, res, next) {

        try {
            const user = await authModel.verifyLogin(req.body.login)
            if (user) {
                if (await argon2.verify(user.password, req.body.password)) {
                    next()
                } else {
                    res.status(404).send({
                        error: "L'identifiant et/ou le mot de passe sont incorrects"
                    })
                }
            } else {
                res.status(404).send({
                    error: "L'identifiant et/ou le mot de passe sont incorrects"
                })
            }
        } catch (error) {
            res.status(500).send({
                error: error.message
            })
        }
    }

}

module.exports = new UsersMiddleware()
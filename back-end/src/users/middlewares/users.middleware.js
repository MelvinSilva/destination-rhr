const Joi = require('joi');
const { joiPassword } = require('joi-password')
const { connection } = require('../models/users.model')
// On utilise en destructuring connection pour aller le chercher dans le model users.model.js
// afin de l'utiliser ensuite sur notre connection.query 

class UsersMiddleware {

    checkSignUp(req, res, next) {
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

    checkEmailExist(req, res, next) {
        const { email } = req.body;
        connection.query(
            'SELECT * FROM users WHERE email = ?',
            [email],
            (err, result) => {
                if (result[0]) {
                    console.error(err);
                    res.status(409).json({ message: 'This email is already used' });
                } else {
                    next()
                }
            }
        )
    }
    checkLoginExist(req, res, next) {
        const { login } = req.body;
        connection.query(
            'SELECT * FROM users WHERE login = ?',
            [login],
            (err, result) => {
                if (result[0]) {
                    console.error(err);
                    res.status(409).json({ message: 'This login is already used' });
                } else {
                    next()
                }
            }
        )
    }
    checkLoginAuth(req, res, next) {
        const { login } = req.body;
        connection.query(
            'SELECT * FROM users WHERE login = ?',
            [login],
            (err, result) => {
                if (result[0]) {
                    next()
                } else {
                    console.error(err);
                    res.status(409).json({ message: 'This login is not valid' });
                }
            }
        )
    }
}  

module.exports = new UsersMiddleware()
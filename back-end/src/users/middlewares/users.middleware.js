const Joi = require('joi');
const { joiPassword } = require('joi-password')

class UsersMiddleware {

    checkPassword(req, res, next) {
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
    






}



module.exports = new UsersMiddleware()
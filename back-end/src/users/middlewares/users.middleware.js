const Joi = require('joi');
const { joiPassword } = require('joi-password')

class UsersMiddleware {

    checkPassword(req, res, next) {
        const { password } = req.body;
        const { error } = Joi.object({
            password: joiPassword
                .string()
                .min(8)
                .minOfUppercase(1)
                .minOfSpecialCharacters(1)
                .minOfNumeric(1)
                .required(),
        }).validate({ password }, { abortEarly: false })

        if (error) {
            res.status(422).json({ validationErrors: error.details })
        } else {
            next()
        }

    }
}



module.exports = new UsersMiddleware()
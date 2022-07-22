const jwt = require('jsonwebtoken')

class UserMiddleware {

    async checkToken(req, res, next) {
        try {
            jwt.verify(req.cookies.user_token, process.env.TOKEN_SECRET);
            next()
        } catch (error) {
            res.status(401).send({
                error: error.message
            })
        }
    }
}
module.exports = new UserMiddleware()
const jwt = require('jsonwebtoken')
require('dotenv').config()

const user = {
    email: "toto@toto.fr"
}

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1800s'})
}

const accessToken = generateAccessToken(user)
console.log('Le token est :', accessToken)
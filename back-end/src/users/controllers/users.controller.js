const userModel = require('../models/users.model')
const argon2 = require('argon2')

class UserController {
    async readUsers(req, res) {
        try {
            const users = await userModel.getUsers()
            res.status(200).send(users)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    async updateUsers(req, res) {
        try {
            req.body.password = await argon2.hash(req.body.password) // crypté mdp
            const updateUser = req.body
            const putUsers = await userModel.putUsers(updateUser, req.params.id)
            res.status(200).send(putUsers)
        }
        catch (error) {
            res.status(404).send({ error: error.message })
        }
    }
    async createUsers(req, res) {
        try {
            req.body.password = await argon2.hash(req.body.password) // crypté mdp
            const createUser = req.body
            const postUsers = await userModel.postUsers(createUser)
            res.status(200).send(postUsers)
        }
        catch (error) {
            res.status(404).send({ error: error.message })
        }
    }
    async deleteUsers(req, res) {
        try {
            const deleteUsers = await userModel.deleteUsers(req.params.id)
            res.status(200).send(deleteUsers)
        }
        catch (error) {
            res.status(404).send({ error: error.message })
        }
    }
}
module.exports = new UserController()
const userModel = require('../models/users.model')
const argon2 = require('argon2')

class UserController {
    //******** CHERCHER UN UTILISATEUR ********//
    async findUser(req, res) {
        try {
            const users = await userModel.getUsers()
            res.status(200).send(users)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    //******** MODIFIER UN UTILISATEUR ********//
    async updateUser(req, res) {
        try {
            req.body.password = await argon2.hash(req.body.password) // mdp crypté
            req.body.profil_user = "user"
            const updateUser = req.body
            const putUsers = await userModel.updateUsers(updateUser, req.params.id)
            res.status(200).send(putUsers)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    //******** SUPPRIMER UN UTILISATEUR ********//
    async deleteUser(req, res) {
        try {
            const deleteUsers = await userModel.deleteUsers(req.params.id)
            res.status(200).send(deleteUsers)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    
}
module.exports = new UserController()
const userModel = require('../models/user.model')
const argon2 = require('argon2')

class UserController {
    //******** CHERCHER DES UTILISATEURS ********//
    async listUsers(req, res) {
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
            const user = req.body  // récupère tout et tous les champs sont modifiables
            const putUser = await userModel.updateUser(user, req.params.id)
            res.status(200).send(putUser)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    //******** SUPPRIMER UN UTILISATEUR ********//
    async deleteUser(req, res) {
        try {
            const deleteUser = await userModel.deleteUser(req.params.id)
            res.status(200).send(deleteUser)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    
}
module.exports = new UserController()
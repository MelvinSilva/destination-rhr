const mysql = require('mysql2')


//******* CONNEXION DB *********//
class UserModel {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })

    //******* REQUETE GET SUR LA DB *********//
    async getUsers() {
        try {
            const result = await this.connection.promise().query('SELECT * FROM users')
            return result[0]
        }
        catch (error) {
            throw error
        }
    }

    //******* REQUETE PUT SUR LA DB *********//
    async putUsers(updateUser, id) {
        try {
            const result = await this.connection.promise().query('UPDATE users SET ? WHERE id = ?', [updateUser, id])
            return result[0]
        }
        catch (error) {
            throw error
        }
    }
    //******* REQUETE POST SUR LA DB *********//
    async postUsers(createUser) {
        try {
            const result = await this.connection.promise().query('INSERT INTO users SET ?', [createUser])
            return result[0]
        }
        catch (error) {
            throw error
        }
    }
    //******* REQUETE DELETE SUR LA DB *********//
    async deleteUsers(id) {
        try {
            const result = await this.connection.promise().query('DELETE FROM users WHERE id = ?', [id])
            return result[0]
        }
        catch (error) {
            throw error
        }
    }
}

module.exports = new UserModel()
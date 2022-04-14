const mysql = require('mysql2')


//******* CONNEXION DB *********//
class AuthModel {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })


    //******* REQUETE INSCRIPTION USER SUR LA DB *********//
    async createUser(createUser) {
        try {
            const result = await this.connection.promise().query('INSERT INTO users SET ?', [createUser])
            return result[0]
        }
        catch (error) {
            throw error
        }
    }

    //******* REQUETE CONNEXION UTILISATEURS SUR LA DB *********//
    async loginUser(login) {
        try {
            const result = await this.connection.promise().query('SELECT login, profil_user, firstname, lastname FROM users WHERE login = ?', [login])
            return result[0][0] // premier [0] = buffer mysql inutile, deuxieme [0] recupere le premier utilisateur et le seul car il n'y en a qu'un grave au WHERE login qui est unique!!!!
        }
        catch (error) {
            throw error
        }
    }

//******* VERIFICATION *********//

    async verifyLogin(loginVerify) {
        try {
            const result = await this.connection.promise().query('SELECT login FROM users WHERE login = ?', [loginVerify])
            return result[0]
        }
        catch (error) {
            throw error
        }
    }

    async verifyEmail(emailVerify) {
        try {
            const result = await this.connection.promise().query('SELECT email FROM users WHERE email = ?', [emailVerify])
            return result[0]
        }
        catch (error) {
            throw error
        }
    }

    async verifyAuthUser(authVerify) {
        try {
            const result = await this.connection.promise().query('SELECT login, password FROM users WHERE login = ?', [authVerify])
            return result[0][0]
        }
        catch (error) {
            throw error
        }
    }
}



module.exports = new AuthModel()
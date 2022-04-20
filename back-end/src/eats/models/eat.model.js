const mysql = require('mysql2')


//******* CONNEXION DB *********//
class EatModel {
    connection = mysql.createConnection({ 
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })

    //******* REQUETE GET SUR LA DB *********//
    async listEats() { 
        try {
            const result = await this.connection.promise().query('SELECT * FROM eat')
            return result[0]
        }
        catch (error) {
            throw error
        }
    }

    //******* REQUETE PUT SUR LA DB *********//
    async updateEat(updateEat, id) { 
        try {
            const result = await this.connection.promise().query('UPDATE eat SET ? WHERE id = ?', [updateEat, id])
            return result[0]
        }
        catch (error) {
            throw error
        }
    }
        //******* REQUETE DELETE SUR LA DB *********//
        async deleteEat(id) { 
            try {
                const result = await this.connection.promise().query('DELETE FROM eat WHERE id = ?', [id])
                return result[0]
            }
            catch (error) {
                throw error
            }
        }
}

module.exports = new EatModel()
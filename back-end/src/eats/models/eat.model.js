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

    //******* REQUETE GET SUR LA DB pour tous les eats *********//
    async listEats() { 
        try {
            const result = await this.connection.promise().query('SELECT * FROM eat')
            return result[0]
        }
        catch (error) {
            throw error
        }
    }

        //******* REQUETE GET SUR LA DB pour chaque id_station *********//
        async listEatStation(id_station) { 
            try {
                const result = await this.connection.promise().query('SELECT a.*, s.city FROM eat AS a LEFT JOIN station AS s ON a.id_station=s.id WHERE a.id_station =  ?', [id_station])
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
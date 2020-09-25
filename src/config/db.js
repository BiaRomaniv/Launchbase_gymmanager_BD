const {Pool} = require("pg") // pool pra nao precisar colcoar a senha toda a hora pq vamos configurar

module.exports = new Pool ({
    user: 'postgres',
    password: 'postgres',
    host: "localhost",
    port: 5432,
    database: "gymmanager"

})
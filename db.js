const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "newusers",
    password: "masterp",
    port: 5432
})


module.exports = pool;
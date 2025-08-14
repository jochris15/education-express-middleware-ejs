const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'game_app',
    idleTimeoutMillis: 500
})

module.exports = pool
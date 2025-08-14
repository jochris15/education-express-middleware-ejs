const pool = require('../config/setup')

const dropTable = `DROP TABLE IF EXISTS "Games"`

const gamesTable = `
CREATE TABLE IF NOT EXISTS "Games" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR NOT NULL,
    "gameImg" VARCHAR NOT NULL,
    "releaseDate" DATE NOT NULL,
    "developer" VARCHAR NOT NULL,
    "genre" VARCHAR NOT NULL
);
`


async function migration() {
    try {
        await pool.query(dropTable)
        console.log("Drop table succeed");

        await pool.query(gamesTable)
        console.log("Table games created");
    } catch (error) {
        console.log(error);
    }
}

migration()
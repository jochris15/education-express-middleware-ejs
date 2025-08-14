const pool = require('../config/setup')

const dataGames = require('../data/games.json')

const games = dataGames.map((el) => {
    const { name, gameImg, releaseDate, developer, genre } = el
    return `('${name}', '${gameImg}', '${releaseDate}', '${developer}', '${genre}')`
}).join(",\n")

const gameSeed = `
INSERT INTO "Games" ("name", "gameImg", "releaseDate", "developer", "genre")
    VALUES ${games}
`

async function seed() {
    try {
        await pool.query(gameSeed)
        console.log("Succeed insert data games");
    } catch (error) {
        console.log(error);
    }
}

seed()
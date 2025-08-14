const pool = require("../config/setup");
const Game = require("./class");

class Model {
    static async read(search) {
        try {
            let query = 'SELECT * FROM "Games"';

            // kalo ada search, tambahkan kondisi WHERE
            // untuk mencari nama game yang mengandung string search
            if (search) {
                query += `WHERE "name" ILIKE '%${search}%'`;
            }

            const { rows } = await pool.query(query);

            const games = rows.map(el => {
                const { id, name, gameImg, releaseDate, developer, genre } = el;

                return new Game(id, name, gameImg, releaseDate, developer, genre);
            });

            return games;
        } catch (error) {
            throw error
        }
    }

    static async detail(GameId) {
        try {
            const query = `
            SELECT * FROM "Games"
                WHERE id = $1
            `;

            const { rows } = await pool.query(query, [GameId]);

            const { id, name, gameImg, releaseDate, developer, genre } = rows[0]

            const game = new Game(id, name, gameImg, releaseDate, developer, genre);

            return game;
        } catch (error) {
            throw error
        }
    }
}

module.exports = Model;
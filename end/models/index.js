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

    static async add(name, gameImg, releaseDate, developer, genre) {
        try {
            const query = `
            INSERT INTO "Games" ("name", "gameImg", "releaseDate", "developer", "genre")
                VALUES ($1, $2, $3, $4, $5)
            `;

            // using parameterized query to prevent SQL injection
            await pool.query(query, [name, gameImg, releaseDate, developer, genre]);
        } catch (error) {
            throw error
        }
    }

    static async edit(id, name, gameImg, releaseDate, developer, genre) {
        try {
            const query = `
            UPDATE "Games"
                SET "name" = $1, 
                "gameImg" = $2,
                "releaseDate" = $3, 
                "developer" = $4, 
                "genre" = $5
                WHERE id = $6
            `;

            await pool.query(query, [name, gameImg, releaseDate, developer, genre, id]);
        } catch (error) {
            throw error
        }
    }

    static async delete(GameId) {
        try {
            const query = `
                DELETE FROM "Games"
                WHERE id = $1
            `;

            await pool.query(query, [GameId]);
        } catch (error) {
            throw error
        }
    }
}

module.exports = Model;
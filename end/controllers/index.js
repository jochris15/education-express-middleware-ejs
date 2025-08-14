const Model = require("../models");

class Controller {
    static async read(req, res) {
        try {
            const { search } = req.query;
            const data = await Model.read(search);

            res.render("home", { games: data });
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }

    static async detail(req, res) {
        try {
            const { id } = req.params

            const data = await Model.detail(id);

            res.render("detail", { game: data });
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }

    static async addForm(req, res) {
        try {
            res.render("add");
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }

    static async add(req, res) {
        try {
            const { name, gameImg, releaseDate, developer, genre } = req.body;

            await Model.add(name, gameImg, releaseDate, developer, genre);
            res.redirect("/");
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }

    static async editForm(req, res) {
        try {
            const { id } = req.params;
            const data = await Model.detail(id);

            res.render("edit", { game: data });
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }

    static async edit(req, res) {
        try {
            const { id } = req.params;
            const { name, gameImg, releaseDate, developer, genre } = req.body;

            await Model.edit(id, name, gameImg, releaseDate, developer, genre);
            res.redirect(`/games/${id}`);
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;

            await Model.delete(id);
            res.redirect("/");
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }
}

module.exports = Controller;
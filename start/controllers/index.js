const Model = require("../models");

class Controller {
    static async read(req, res) {
        try {
            const { search } = req.query;
            const data = await Model.read(search);

            res.send(data)
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }

    static async detail(req, res) {
        try {
            const { id } = req.params

            const data = await Model.detail(id);

            res.send(data)
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }
}

module.exports = Controller;
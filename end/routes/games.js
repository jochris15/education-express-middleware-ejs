const express = require('express')
const Controller = require('../controllers')

const router = express.Router()

// Endpoint to handle games
// All endpoint are prefixed with /games here
router.get('/', Controller.read)
router.get('/add', Controller.addForm)
router.post('/add', Controller.add)
router.get('/edit/:id', Controller.editForm)
router.post('/edit/:id', Controller.edit)
router.get('/delete/:id', Controller.delete)

// detail endpoint put at the end to avoid conflict with other routes
// because it has a parameterized route, after /games expecting dynamic id
// if placed before other normal routes, it will conflict
router.get('/:id', Controller.detail)


module.exports = router
const express = require('express')
const router = express.Router()
const gameRouter = require('./games')

// handle endpoint '/' and redirect to '/games'
router.get('/', (req, res) => {
    res.redirect('/games')
})

// router to handle games, with prefix endpoint '/games'
router.use('/games', gameRouter)

module.exports = router
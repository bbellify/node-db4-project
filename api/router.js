const express = require('express')
const Recipe = require('./model')
const router = express.Router()

router.get('/:recipe_id', (req, res, next) => {
    Recipe.getRecipeById(req.params.recipe_id)
        .then( rec => {
            res.json(rec)
        })
        .catch(next)
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = router
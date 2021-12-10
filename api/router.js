const express = require('express')
const Recipe = require('./model')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.json({ message: 'hi '})
})

router.get('/:recipe_id', (req, res, next) => {
    Recipe.getRecipeById(req.params.recipe_id)
        .then( rec => {
            res.json(rec)
        })

})

module.exports = router
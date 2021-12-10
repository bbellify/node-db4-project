const db = require('../data/db-config')

async function getRecipeById(id) {
    const rows = await db('recipes')
        .where('recipe_id', id)
    return rows
}

module.exports = {
    getRecipeById,
}
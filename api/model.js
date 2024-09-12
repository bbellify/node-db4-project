const db = require('../data/db-config')

async function getRecipeById(recipe_id) {

//     select
//     r.*,
//     s.*,
//     i.*
// from recipes as r
// join steps as s
//     on s.recipe_id = r.recipe_id
// left join steps_ingredients as si
//     on s.step_id = si.step_id
// left join ingredients as i
//     on si.ingredient_id = i.ingredient_id
//  where r.recipe_id = 1
//  order by s.step_number;


    const rows = await db('recipes as r')
        .join('steps as s', 's.recipe_id', 'r.recipe_id')
        .leftJoin('step_ingredients as si', 's.step_id', 'si.step_id')
        .leftJoin('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
        .where('r.recipe_id', recipe_id)
        .orderBy('s.step_number')

    let steps = []

    const recipe = {
        recipe_id: rows[0].recipe_id,
        recipe_name: rows[0].recipe_name,
        created_at: rows[0].created_at,
        steps: steps,
    }

    return recipe
}

module.exports = {
    getRecipeById,
}
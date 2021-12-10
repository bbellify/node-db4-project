
const recipes = [
  { recipe_name: "Spaghetti Bolognese" },
  { recipe_name: "Beef and Broccoli" }
]

const steps = [   
  { 
      step_instructions: 'Put a large saucepan on medium heat',
      step_number: 1,
      recipe_id: 1
  },
  { 
      step_instructions: 'Add 1tbsp of olive oil',
      step_number: 2,
      recipe_id: 1
      }
]

const ingredients = [   
  { 
      ingredient_name: 'olive oil',
      ingredient_unit: 'tbsp',
  }
]

const step_ingredients = [   
  // Spaghetti Bolognese
  { quantity: 0.074, step_id: 1, ingredient_id: 1,
  }
]

exports.seed = async function(knex) {
    await knex('recipes').insert(recipes)
    await knex('steps').insert(steps)
    await knex('ingredients').insert(ingredients)
    await knex('step_ingredients').insert(step_ingredients)
  };
  
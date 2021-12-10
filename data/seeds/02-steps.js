
exports.seed = function(knex, Promise) {
    return knex('steps').insert([   
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
    ]);
  };
  
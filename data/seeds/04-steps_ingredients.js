
exports.seed = function(knex, Promise) {
    return knex('steps_ingredients').insert([   
        { 
            quantity: 0.074,
            step_id: 1,
            ingredient_id: 1,
        }
    ]);
  };
  
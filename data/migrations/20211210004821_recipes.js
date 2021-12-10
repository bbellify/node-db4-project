
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes')
    .createTable('steps')
    .createTable('ingredients')
    .createTable('steps_ingredients')
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('steps_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};

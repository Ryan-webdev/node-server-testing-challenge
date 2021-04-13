
exports.up = function(knex) {
  return knex.schema.createTable("sports", tbl =>{
      tbl.increments();

      tbl.string('name', 250).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sports');
};

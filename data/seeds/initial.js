
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('sports')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sports').insert([
        { name : 'soccer' },
        { name : 'baseball' },
        { name : 'football' }
      ]);
    });
};

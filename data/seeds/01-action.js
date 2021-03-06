
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('action').del()
    .then(function () {
      // Inserts seed entries
      return knex('action').insert([
        { project_id: 1, description: 'Action 1', notes: 'Notes - Action 1', completed: true },
        { project_id: 2, description: 'Action 2', notes: 'Notes - Action 2', completed: false },
        { project_id: 3, description: 'Action 3', notes: 'Notes - Action 3', completed: true },
        { project_id: 3, description: 'Action 4', notes: 'Notes - Action 4', completed: true }
      ]);
    });
};

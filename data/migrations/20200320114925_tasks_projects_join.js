exports.up = function(knex)
{
    return knex.schema.createTable("tasks_projects_join", table =>
    {

    });
};

exports.down = function(knex)
{
    return knex.schema.dropTableIfExists("tasks_projects_join");
};
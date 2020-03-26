exports.up = function(knex)
{
    return knex.schema.createTable("tasks_projects_join", table =>
    {
        table.integer("project").references("projects.id");

        table.integer("task").references("tasks.id");
    });
};

exports.down = function(knex)
{
    return knex.schema.dropTableIfExists("tasks_projects_join");
};
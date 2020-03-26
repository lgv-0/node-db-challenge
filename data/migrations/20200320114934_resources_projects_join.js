exports.up = function(knex)
{
    return knex.schema.createTable("resources_projects_join", table =>
    {
        table.integer("project").references("projects.id");

        table.integer("resource").references("resources.id");
    });
};

exports.down = function(knex)
{
    return knex.schema.dropTableIfExists("resources_projects_join");
};
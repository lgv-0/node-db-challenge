exports.up = function(knex)
{
    return knex.schema.createTable("resources_projects_join", table =>
    {

    });
};

exports.down = function(knex)
{
    return knex.schema.dropTableIfExists("resources_projects_join");
};
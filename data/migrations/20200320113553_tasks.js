exports.up = function(knex)
{
    return knex.schema.createTable("tasks", table =>
    {

    });
};

exports.down = function(knex)
{
    return knex.schema.dropTableIfExists("tasks");
};
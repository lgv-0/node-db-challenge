exports.up = function(knex)
{
    return knex.schema.createTable("projects", table =>
    {

    });
};

exports.down = function(knex)
{
    return knex.schema.dropTableIfExists("projects");
};
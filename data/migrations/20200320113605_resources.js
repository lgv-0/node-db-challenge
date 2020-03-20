exports.up = function(knex)
{
    return knex.schema.createTable("resources", table =>
    {

    });
};

exports.down = function(knex)
{
    return knex.schema.dropTableIfExists("resources");
};
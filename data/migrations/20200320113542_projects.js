exports.up = function(knex)
{
    return knex.schema.createTable("projects", table =>
    {
        table.increments().unique().notNullable();

        table.text("name").notNullable();

        table.text("description");

        table.boolean("completed").notNullable().defaultTo(false);
    });
};

exports.down = function(knex)
{
    return knex.schema.dropTableIfExists("projects");
};
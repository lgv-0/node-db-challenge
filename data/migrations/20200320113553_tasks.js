exports.up = function(knex)
{
    return knex.schema.createTable("tasks", table =>
    {
        table.increments().unique().notNullable();

        table.text("description").notNullable();

        table.text("notes");

        table.boolean("completed").notNullable().defaultTo(false);
    });
};

exports.down = function(knex)
{
    return knex.schema.dropTableIfExists("tasks");
};
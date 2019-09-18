exports.up = function(knex) {
  return Promise.all([
    knex.schema.hasTable("renters").then(function(exists) {
      if (!exists) {
        return knex.schema.createTable("renters", function(table) {
          table.uuid("id").primary();
          table.string("name").notNullable();
          table.string("email").notNullable();
          table.string("avatar_url");
          table.string("google_id").notNullable();
          table.string("google_token").notNullable();
          table.specificType("favorites", "text ARRAY");
          table.specificType("queries", "text ARRAY");
          table.boolean("opt_in");
          table.timestamp("created_at").defaultTo(knex.fn.now());
          table.timestamp("updated_at").defaultTo(knex.fn.now());
        });
      }
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.hasTable("renters").then(function(exists) {
      if (exists) {
        return knex.schema.dropTable("renters");
      }
    })
  ]);
};

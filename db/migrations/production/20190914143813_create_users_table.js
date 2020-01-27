exports.up = function(knex) {
  return Promise.all([
    knex.schema.hasTable("users").then(function(exists) {
      if (!exists) {
        return knex.schema.createTable("users", function(table) {
          table.uuid("id").primary();
          table.enu("user_type", ["manager", "renter"]).notNullable();
          table.string("name").notNullable();
          table.string("email").notNullable();
          table.string("phone");
          table.string("company_name");
          table.string("company_street");
          table.string("company_city");
          table.string("company_state");
          table.string("company_zip");
          table.specificType("favorites", "text ARRAY");
          table.specificType("queries", "text ARRAY");
          table.boolean("opt_in");
          table.string("avatar_url");
          table.string("google_id").notNullable();
          table.string("google_token").notNullable();
          table.timestamp("created_at").defaultTo(knex.fn.now());
          table.timestamp("updated_at").defaultTo(knex.fn.now());
        });
      }
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.hasTable("users").then(function(exists) {
      if (exists) {
        return knex.schema.dropTable("users");
      }
    })
  ]);
};

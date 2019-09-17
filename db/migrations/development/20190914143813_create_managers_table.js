exports.up = function(knex) {
  return Promise.all([
    knex.schema.hasTable("managers").then(function(exists) {
      if (!exists) {
        return knex.schema.createTable("managers", function(table) {
          table.uuid("id").primary();
          table.string("contact_name").notNullable();
          table.string("contact_email").notNullable();
          table.string("contact_phone");
          table.string("company_name");
          table.string("company_street");
          table.string("company_city");
          table.string("company_state");
          table.string("company_zip");
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
    knex.schema.hasTable("managers").then(function(exists) {
      if (exists) {
        return knex.schema.dropTable("managers");
      }
    })
  ]);
};

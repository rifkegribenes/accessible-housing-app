exports.up = function(knex) {
  return Promise.all([
    knex.schema.hasTable("listings").then(function(exists) {
      if (!exists) {
        return knex.schema.createTable("listings", function(table) {
          table.uuid("id").primary();
          table.uuid("user_id").notNullable();
          table.string("property_name").notNullable();
          table.string("property_street").notNullable();
          table.string("property_city").notNullable();
          table.string("property_state").notNullable();
          table.string("property_zip").notNullable();
          table.string("property_quadrant").notNullable();
          table.string("property_lat").notNullable();
          table.string("property_lon").notNullable();
          table.string("property_county").notNullable();
          table.string("property_phone").notNullable();
          table.string("listing_url").notNullable();
          table.boolean("vacant").notNullable();
          table.date("available_date").notNullable();
          table.decimal("monthly_rent", 4, 2).notNullable();
          table.string("primary_image").notNullable();
          table.specificType("features", "text ARRAY");
          table.decimal("views", 10, 0);
          table.decimal("favorites", 10, 0);
          table.timestamp("created_at").defaultTo(knex.fn.now());
          table.timestamp("updated_at").defaultTo(knex.fn.now());

          table
            .foreign("user_id")
            .references("id")
            .inTable("users");
        });
      }
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.hasTable("listings").then(function(exists) {
      if (exists) {
        return knex.schema.dropTable("listings");
      }
    })
  ]);
};

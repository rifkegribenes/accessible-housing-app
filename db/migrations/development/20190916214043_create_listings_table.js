exports.up = function(knex) {
  return Promise.all([
    knex.schema.hasTable("listings").then(function(exists) {
      if (!exists) {
        return knex.schema.createTable("listings", function(table) {
          table.uuid("id").primary();
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
          table.specificType("gallery", "text ARRAY");
          table.specificType("views", "text ARRAY");
          table.specificType("favorites", "text ARRAY");
          table.timestamp("created_at").defaultTo(knex.fn.now());
          table.timestamp("updated_at").defaultTo(knex.fn.now());
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

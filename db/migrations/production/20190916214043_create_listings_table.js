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
          table.string("property_lat");
          table.string("property_lon");
          table.string("property_county");
          table.string("property_phone");
          table.string("property_email");
          table.string("listing_url");
          table.string("application_url");
          table.date("available_date");
          table.decimal("studio_l", 6, 2);
          table.decimal("studio_h", 6, 2);
          table.decimal("br1_l", 6, 2);
          table.decimal("br1_h", 6, 2);
          table.decimal("br2_l", 6, 2);
          table.decimal("br2_h", 6, 2);
          table.decimal("br3_l", 6, 2);
          table.decimal("br3_h", 6, 2);
          table.decimal("br4_l", 6, 2);
          table.decimal("br4_h", 6, 2);
          table.decimal("br5_l", 6, 2);
          table.decimal("br5_h", 6, 2);
          table.decimal("deposit", 6, 2);
          table.decimal("parking_fee", 6, 2);
          table.string("notes");
          table.decimal("lease_length", 2, 0);
          table.decimal("square_feet", 4, 0);
          table.decimal("age", 2, 0);
          table.string("primary_image");
          table.string("availability");
          table.string("laundry_type");
          // in-unit, hookup, laundry_facilities
          table.string("parking_type");
          // surface_lot, covered, street, garage
          table.string("accessibility");
          table.string("pets");
          table.specificType("features", "text ARRAY");
          // dogs, cats, no_pets, furnished, no_smoking, gated_entry
          // 60_in_circular_space_for_turning, 32_in_wide_doorways,
          // accessible_route_to_unit, bathroom_wall_reinforcements,
          // bathroom_grab_bars, shower_seat,
          // bathroom_56_x_60_in_floor_clearance, kitchen_40_in_aisle,
          // kitchen_60_in_floor_clearance_if_U-shaped,
          // kitchen_sink_knee_and_toe_clearance,
          // kitchen_sink_34_in_above_floor,
          // kitchen_work_surface_34_in_above_floor, front_control_range,
          // visible_notification_alarm_system,
          // operable_parts_48_in_above_floor (light switches, thermostats, peepholes)
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

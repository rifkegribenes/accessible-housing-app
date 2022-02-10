// db/models/listings.js

/* ================================= SETUP ================================= */

const uuid = require("uuid");
const { db, TABLES } = require("../../app/config/knex");

/* ============================ PUBLIC METHODS ============================= */

/** Create a listing
 *  @param {string}   property_name       Property name
 *  @param {string}   property_street     Property street address
 *  @param {string}   property_city       Property city
 *  @param {string}   property_state      Property state
 *  @param {strong}   property_zip        Property zip
 *  @param {string}   property_quadrant   Property quadrant
 *  @param {string}   property_lat        Property latitude
 *  @param {string}   property_lon        Property longitude
 *  @param {string}   property_county     Property county
 *  @param {string}   property_phone      Property phone
 *  @param {string}   property_email      Property email
 *  @param {string}   listing_url         Property listing url
 *  @param {date}     available_date      Date available
 *  @param {string}   primary_image       Image url
 *  @param {array}    features            Array of amenities and features
 *  @param {uuid}     user_id             User ID of property owner
 *  @returns  {Array}    Array of 1 newly-created Listing object.
 */
const createListing = (
  property_name,
  property_street,
  property_city,
  property_state,
  property_zip,
  property_quadrant,
  property_lat,
  property_lon,
  property_county,
  property_phone,
  property_email,
  listing_url,
  application_url,
  available_date,
  studio_l,
  studio_h,
  br1_l,
  br1_h,
  br2_l,
  br2_h,
  br3_l,
  br3_h,
  br4_l,
  br4_h,
  br5_l,
  br5_h,
  primary_image,
  availability,
  features,
  user_id,
  deposit,
  lease_length,
  square_feet,
  age,
  laundry_type,
  parking_type,
  accessibility,
  pets,
  parking_fee
) => {
  console.log(`models/listings.js > 49`);
  console.log(user_id);
  return db
    .insert({
      id: uuid.v4(),
      property_name,
      property_street,
      property_city,
      property_state,
      property_zip,
      property_quadrant,
      property_lat,
      property_lon,
      property_county,
      property_phone,
      property_email,
      listing_url,
      application_url,
      available_date,
      studio_l,
      studio_h,
      br1_l,
      br1_h,
      br2_l,
      br2_h,
      br3_l,
      br3_h,
      br4_l,
      br4_h,
      br5_l,
      br5_h,
      primary_image,
      availability,
      features,
      user_id,
      deposit,
      lease_length,
      square_feet,
      age,
      laundry_type,
      parking_type,
      accessibility,
      pets,
      parking_fee
    })
    .into(TABLES.LISTINGS)
    .returning("*")
    .catch(err => console.log(err));
};

/** Update a listing
 *  @param    {String}   id             The id of the listing to update.
 *  @param    {Object}   updates        Key/value pairs of fields to update.
 *  @param {string}   property_name       Property name
 *  @param {string}   property_street     Property street address
 *  @param {string}   property_city       Property city
 *  @param {string}   property_state      Property state
 *  @param {strong}   property_zip        Property zip
 *  @param {string}   property_quadrant   Property quadrant
 *  @param {string}   property_lat        Property latitude
 *  @param {string}   property_lon        Property longitude
 *  @param {string}   property_county     Property county
 *  @param {string}   property_phone      Property phone
 *  @param {string}   property_email      Property_email
 *  @param {string}   listing_url         Property listing url
 *  @param {date}     available_date      Date available
 *  @param {string}   primary_image       Image url
 *  @param {array}    features            Array of amenities and features
 *  @param {number}   views               # times listing viewed
 *  @param {numbere}  favorites           # times listing favorited
 *  @returns  {Object}   Updated listing object.
 */
const updateListing = (id, updates) => {
  return db(TABLES.LISTINGS)
    .where({ id })
    .first()
    .update(updates)
    .update("updated_at", db.fn.now())
    .returning("*");
};

/** Get all listings
 *  @returns   {Array}   Array of listing objects.
 */

const getListings = () => {
  return db(TABLES.LISTINGS).returning("*");
};

/** Find a listing by id
 *  @param    {String}   id   The id of the listing to return.
 *  @returns  {Object}        Listing object.
 */

const getListingById = id => {
  return db(TABLES.LISTINGS)
    .where({ id })
    .first()
    .returning("*");
};

/** Get all listings for one user
 *  @param    {String}   userId   The userId of the listings to return.
 *  @returns  {Object}        Listing object.
 */

const getUserListings = userId => {
  return db(TABLES.LISTINGS)
    .where({ user_id: userId })
    .returning("*");
};

/** Delete listing
 *  @param    {String}   id   The id of the listing to delete.
 *  @returns  success message
 */

const deleteListing = id => {
  return db(TABLES.LISTINGS)
    .where({ id })
    .del()
    .then(() => {
      // then return success message to client
      return { message: "Listing deleted successfully" };
    });
};

/* ================================ exports ================================ */

module.exports = {
  createListing,
  updateListing,
  getListingById,
  getListings,
  getUserListings,
  deleteListing
};

// db/models/renters.js

/* ================================= SETUP ================================= */

const uuid = require("uuid");
const { db, TABLES } = require("../../app/config/knex");

/* ============================ PUBLIC METHODS ============================= */

/** Create a renter (user record)
 *  @param    {String}   name           Full name.
 *  @param    {String}   email          Email.
 *  @param    {String}   avatar_url     Avatar url.
 *  @param    {Array}    favorites      Array of ids of favorite listings.
 *  @param    {Array}    queries        Array of saved search queries.
 *  @param    {Boolean}  opt_in         Opt in for push notifications.
 *  @param    {String}   google_id      Google id.
 *  @param    {String}   google_token   Google token.
 *  @returns  {Array}    Array of 1 newly-created Renter object.
 */
const createRenter = (name, email, avatar_url, google_id, google_token) => {
  return db
    .insert({ id: uuid.v4(), name, email, avatar_url, google_id, google_token })
    .into(TABLES.RENTERS)
    .returning("*");
};

/** Update a renter
 *  @param    {String}   id             The id of the renter to update.
 *  @param    {Object}   updates        Key/value pairs of fields to update.
 ****  @param    {String}   name            Updated name.
 ****  @param    {String}   email           Updated email.
 ****  @param    {String}   avatar_url      Updated avatar url.
 ****  @param    {Array}    favorites       Array of ids of favorite listings.
 ****  @param    {Array}    queries         Array of saved search queries.
 ****  @param    {Boolean}  opt_in          Opt in for push notifications.
 *  @returns  {Object}   Renter object.
 */
const updateRenter = (id, updates) => {
  return db(TABLES.RENTERS)
    .where({ id })
    .first()
    .update(updates)
    .update("updated_at", db.fn.now())
    .returning("*");
};

/** Get all renters
 *  @returns   {Array}   Array of renter objects.
 */

const getRenters = () => {
  return db(TABLES.RENTERS).returning("*");
};

/** Find a renter by id
 *  @param    {String}   id   The id of the renter to return.
 *  @returns  {Object}        Renter object.
 */

const getRenterById = id => {
  return db(TABLES.RENTERS)
    .where({ id })
    .first()
    .returning("*");
};

/** Find a renter by google_id
 *  @param    {String}   google_id   The google_id of the renter to return.
 *  @returns  {Object}        Renter object.
 */

const getRenterByGoogleId = google_id => {
  return db(TABLES.RENTERS)
    .where({ google_id })
    .first()
    .returning("*");
};

/** Delete renter
 *  @param    {String}   id   The id of the renter to delete.
 *  @returns  success message
 */

const deleteRenter = id => {
  return db(TABLES.RENTERS)
    .where({ id })
    .del()
    .then(() => {
      // then return success message to client
      return { message: "Renter deleted successfully" };
    });
};

/* ================================ exports ================================ */

module.exports = {
  createRenter,
  updateRenter,
  getRenterById,
  getRenterByGoogleId,
  getRenters,
  deleteRenter
};

// db/models/managers.js

/* ================================= SETUP ================================= */

const uuid = require("uuid");
const { db, TABLES } = require("../../app/config/knex");

/* ============================ PUBLIC METHODS ============================= */

/** Create a manager (property manager user record)
 *  @param    {String}   name           Full name.
 *  @param    {String}   email          Email.
 *  @param    {String}   phone          Phone.
 *  @param    {String}   company_name   Company name.
 *  @param    {String}   company_street Company street address.
 *  @param    {String}   company_city   Company city.
 *  @param    {String}   company_state  Company state.
 *  @param    {String}   company_zip    Company zip.
 *  @param    {String}   avatar_url     Avatar url.
 *  @param    {String}   google_id      Google id.
 *  @param    {String}   google_token   Google token.
 *  @returns  {Array}    Array of 1 newly-created Manager object.
 */
const createManager = (
  name,
  email,
  phone,
  company_name,
  company_street,
  company_city,
  company_state,
  company_zip,
  avatar_url,
  google_id,
  google_token
) => {
  return db
    .insert({
      id: uuid.v4(),
      name,
      email,
      phone,
      company_name,
      company_street,
      company_city,
      company_state,
      company_zip,
      avatar_url,
      google_id,
      google_token
    })
    .into(TABLES.MANAGERS)
    .returning("*");
};

/** Update a manager
 *  @param    {String}   id             The id of the manager to update.
 *  @param    {Object}   updates        Key/value pairs of fields to update.
 ****  @param    {String}   name            Updated name.
 ****  @param    {String}   email           Updated email.
 ****  @param    {String}   avatar_url      Updated avatar url.
 ****  @param    {String}   phone           Updated phone.
 ****  @param    {String}   company_name    Updated company name.
 ****  @param    {String}   company_street  Updated company street address.
 ****  @param    {String}   company_city    Updated company city.
 ****  @param    {String}   company_state   Updated company state.
 ****  @param    {String}   company_zip     Updated company zip.
 *  @returns  {Object}   Manager object.
 */
const updateManager = (id, updates) => {
  return db(TABLES.MANAGERS)
    .where({ id })
    .first()
    .update(updates)
    .update("updated_at", db.fn.now())
    .returning("*");
};

/** Get all managers
 *  @returns   {Array}   Array of manager objects.
 */

const getManagers = () => {
  return db(TABLES.MANAGERS).returning("*");
};

/** Find a manager by id
 *  @param    {String}   id   The id of the manager to return.
 *  @returns  {Object}        Manager object.
 */

const getManagerById = id => {
  return db(TABLES.MANAGERS)
    .where({ id })
    .first()
    .returning("*");
};

/** Find a manager by google_id
 *  @param    {String}   google_id   The google_id of the manager to return.
 *  @returns  {Object}        Manager object.
 */

const getManagerByGoogleId = google_id => {
  return db(TABLES.MANAGERS)
    .where({ google_id })
    .first()
    .returning("*");
};

/** Delete manager
 *  @param    {String}   id   The id of the manager to delete.
 *  @returns  success message
 */

const deleteManager = id => {
  return db(TABLES.MANAGERS)
    .where({ id })
    .del()
    .then(() => {
      // then return success message to client
      return { message: "Manager deleted successfully" };
    });
};

/* ================================ exports ================================ */

module.exports = {
  createManager,
  updateManager,
  getManagerById,
  getManagerByGoogleId,
  getManagers,
  deleteManager
};

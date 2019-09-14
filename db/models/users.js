// db/models/users.js

/* ================================= SETUP ================================= */

const uuid = require("uuid");
const { db, TABLES } = require("../../app/config/knex");

/* ============================ PUBLIC METHODS ============================= */

/** Create a user
 *  @param    {String}   name           New user full name.
 *  @param    {String}   email          New user email.
 *  @param    {String}   phone          New user phone.
 *  @param    {String}   company_name   New user company name.
 *  @param    {String}   company_street New user company street address.
 *  @param    {String}   company_city   New user company city.
 *  @param    {String}   company_state  New user company state.
 *  @param    {String}   company_zip    New user company zip.
 *  @param    {String}   avatar_url     New user avatar url.
 *  @param    {String}   google_id      New user google id.
 *  @param    {String}   google_token   New user google token.
 *  @returns  {Array}    Array of 1 newly-created User object.
 */
const createUser = (name, email, phone, company_name, company_street, company_city, company_state, company_zip, avatar_url, google_id, google_token) => {
  return db
    .insert({ id: uuid.v4(), name, email, phone, company_name, company_street, company_city, company_state, company_zip, avatar_url, google_id, google_token })
    .into(TABLES.USERS)
    .returning("*");
};

/** Update a user
 *  @param    {String}   id             The id of the user to update.
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
 *  @returns  {Object}   User object.
 */
const updateUser = (id, updates) => {
  return db(TABLES.USERS)
    .where({ id })
    .first()
    .update(updates)
    .update("updated_at", db.fn.now())
    .returning("*");
};

/** Get all users
 *  @returns   {Array}   Array of user objects.
 */

const getUsers = () => {
  return db(TABLES.USERS).returning("*");
};

/** Find a user by id
 *  @param    {String}   id   The id of the user to return.
 *  @returns  {Object}        User object.
 */

const getUserById = id => {
  return db(TABLES.USERS)
    .where({ id })
    .first()
    .returning("*");
};

/** Find a user by google_id
 *  @param    {String}   google_id   The google_id of the user to return.
 *  @returns  {Object}        User object.
 */

const getUserByGoogleId = google_id => {
  return db(TABLES.USERS)
    .where({ google_id })
    .first()
    .returning("*");
};

/** Delete user
 *  @param    {String}   id   The id of the user to delete.
 *  @returns  success message
 */

const deleteUser = id => {
  return db(TABLES.USERS)
    .where({ id })
    .del()
    .then(() => {
      // then return success message to client
      return { message: "User deleted successfully" };
    });
};

/* ================================ exports ================================ */

module.exports = {
  createUser,
  updateUser,
  getUserById,
  getUserByGoogleId,
  getUsers,
  deleteUser
};

// db/models/users.js

/* ================================= SETUP ================================= */

const uuid = require("uuid");
const { db, TABLES } = require("../../app/config/knex");

/* ============================ PUBLIC METHODS ============================= */

/** Create a user (property manager or renter record)
 *  @param    {String}   name           Full name.
 *  @param    {String}   email          Email.
 *  @param    {String}   user_type      'manager' or 'renter'.
 *  @param    {String}   phone          Phone.
 *  @param    {String}   company_name   Company name.
 *  @param    {String}   company_street Company street address.
 *  @param    {String}   company_city   Company city.
 *  @param    {String}   company_state  Company state.
 *  @param    {String}   company_zip    Company zip.
 *  @param    {Array}    favorites      Array of ids of favorite listings.
 *  @param    {Array}    queries        Array of saved search queries.
 *  @param    {Boolean}  opt_in         Opt in for push notifications.
 *  @param    {String}   avatar_url     Avatar url.
 *  @param    {String}   google_id      Google id.
 *  @param    {String}   google_token   Google token.
 *  @returns  {Array}    Array of 1 newly-created User object.
 */
const createUser = (
  name,
  email,
  phone,
  user_type,
  company_name,
  company_street,
  company_city,
  company_state,
  company_zip,
  favorites,
  queries,
  opt_in,
  avatar_url,
  google_id,
  google_token
) => {
  const requiredFields = [
    "name",
    "email",
    "user_type",
    "google_id",
    "google_token"
  ];

  const missingField = requiredFields.find(field => !(field in req.body));
  if (missingField) {
    console.log(`listings.ctrl.js > 56: missing ${missingField}`);
    return res.status(422).json({
      reason: "ValidationError",
      message: `Missing required field ${missingField}`
    });
  }

  return db
    .insert({
      id: uuid.v4(),
      name,
      email,
      phone,
      user_type,
      company_name,
      company_street,
      company_city,
      company_state,
      company_zip,
      favorites,
      queries,
      opt_in,
      avatar_url,
      google_id,
      google_token
    })
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
 ****  @param    {Array}    favorites      Array of ids of favorite listings.
 ****  @param    {Array}    queries        Array of saved search queries.
 ****  @param    {Boolean}  opt_in         Opt in for push notifications.
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

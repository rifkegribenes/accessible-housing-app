/*
   Route handlers for fetching and updating listings.
*/

/* ================================= SETUP ================================= */

// import model
const listings = require("../../db/models/listings");

/* ============================ ROUTE HANDLERS ============================= */

/** Create a new listing
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
 *  @param {string}   listing_url         Property listing url
 *  @param {boolean}  vacant              Vacant?
 *  @param {date}     available_date      Date available
 *  @param {number}   monthly_rent        Monthly rent
 *  @param {string}   primary_image       Image url
 *  @param {array}    features            Array of amenities and features
 *  @returns  {Object}                   New listing object OR error message.
 */
const createListing = (req, res, next) => {
  console.log(`listings.ctrl.js > 32`, req.body, req.headers.authorization);
  const {
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
    listing_url,
    vacant,
    available_date,
    monthly_rent,
    primary_image,
    features,
    user_id
  } = req.body;

  const requiredFields = [
    "property_name",
    "property_street",
    "property_city",
    "property_state",
    "property_zip",
    "property_quadrant",
    "property_lat",
    "property_lon",
    "property_county",
    "property_phone",
    "listing_url",
    "vacant",
    "available_date",
    "monthly_rent",
    "primary_image",
    "features",
    "user_id"
  ];

  const missingField = requiredFields.find(field => !(field in req.body));
  if (missingField) {
    console.log(`listings.ctrl.js > 71: missing ${missingField}`);
    return res.status(422).json({
      reason: "ValidationError",
      message: `Missing required field ${missingField}`
    });
  }

  return listings
    .createListing(
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
      listing_url,
      vacant,
      available_date,
      monthly_rent,
      primary_image,
      user_id,
      features
    )
    .then(listings => {
      const listing = listings[0];
      res.status(200).json(listing);
    })
    .catch(err => {
      console.log(`listings.ctrl.js > 30: ${err}`);
      res.status(500).json({ message: err.message });
    });
};

/** Update an existing listing
 *  @param    {String}   id              Id of listing to update.
 *  @param    {Object}   updates         Key/value pairs for fields to update.
 ****  @param    {String}   name            Updated name.
 ****  @param    {String}   email           Updated email.
 ****  @param    {String}   avatar_url      Updated avatar_url.
 ****  @param    {String}   phone           Updated phone.
 ****  @param    {String}   company_name    Updated company name.
 ****  @param    {String}   company_street  Updated company street address.
 ****  @param    {String}   company_city    Updated company city.
 ****  @param    {String}   company_state   Updated company state.
 ****  @param    {String}   company_zip     Updated company zip.
 ****  @param    {Array}    favorites       Array of ids of favorite listings.
 ****  @param    {Array}    queries         Array of saved search queries.
 ****  @param    {Boolean}  opt_in          Opt in for push notifications.
 *  @returns  {Object}                   Updated listing object OR error message.
 */

const updateListing = (req, res, next) => {
  const { updates } = req.body;
  const { id } = req.params;
  if (!updates || !Object.keys(updates).length) {
    return res.status(404).json({ message: "No updates submitted" });
  }

  return listings
    .updateListing(id, updates)
    .then(listing => {
      if (listing.message || !listing) {
        return res.status(404).json({
          message:
            listing.message ||
            "An error occured while trying to update this listing"
        });
      } else {
        return res.status(200).json(listing);
      }
    })
    .catch(err => res.status(500).json({ message: err.message }));
};

/** Delete listing
 *  @param    {String}   id   Id of the listing to delete.
 *  @returns  Success or error message.
 */
const deleteListing = (req, res, next) => {
  return listings
    .deleteListing(req.params.id)
    .then(result => {
      if (result.message === "Listing deleted successfully") {
        return res.status(200).json({ message: result.message });
      } else {
        return res.status(404).json({
          message: "An error occurred and the listing was not deleted."
        });
      }
    })
    .catch(err => res.status(404).json({ message: err.message }));
};

/** Get all listings
 *  @returns  {Array|Object}   Array of listing objects OR error message
 */
const getListings = (req, res, next) => {
  return listings
    .getListings()
    .then(listings => res.status(200).json(listings))
    .catch(err => res.status(404).json({ message: err.message }));
};

/** Get one listing
 *  @param    {String}   id   Id of the requested listing.
 *  @returns  {Object}        Listing object OR error message.
 */
const getListingById = (req, res, next) => {
  return listings
    .getListingById(req.params.id)
    .then(listing => {
      if (!listing || listing.message) {
        console.log(listing.message);
        return res
          .status(404)
          .json({ message: listing.message || "Listing not found" });
      } else {
        res.status(200).json(listing);
      }
    })
    .catch(err => res.status(404).json({ message: err.message }));
};

/* ================================ EXPORT ================================= */

module.exports = {
  createListing,
  updateListing,
  deleteListing,
  getListingById,
  getListings
};

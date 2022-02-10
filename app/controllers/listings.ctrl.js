/*
   Route handlers for fetching and updating listings.
*/

/* ================================= SETUP ================================= */

// import model
const listings = require("../../db/models/listings");
const utils = require("../utils");
const NodeGeocoder = require("node-geocoder");

const options = {
  provider: "google",
  apiKey: process.env.GOOGLE_MAPS_API_KEY,
  formatter: null
};

const geocoder = NodeGeocoder(options);

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
 *  @param {string}   property_email      Property email
 *  @param {string}   listing_url         Property listing url
 *  @param {boolean}  vacant              Vacant?
 *  @param {date}     available_date      Date available
 *  @param {number}   monthly_rent        Monthly rent
 *  @param {string}   primary_image       Image url
 *  @param {array}    features            Array of amenities and features
 *  @returns  {Object}                   New listing object OR error message.
 */
const createListing = async (req, res, next) => {
  console.log(`listings.ctrl.js > 43`, req.body, req.headers.authorization);
  const {
    property_name,
    property_street,
    property_city,
    property_state,
    property_zip,
    property_quadrant,
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
  } = req.body;

  const requiredFields = [
    "property_name",
    "property_street",
    "property_city",
    "property_state",
    "property_zip",
    "property_quadrant",
    "property_county",
    "property_phone",
    "property_email",
    "listing_url",
    "features",
    "user_id"
  ];
  const missingField = requiredFields.find(field => !(field in req.body));
  if (missingField) {
    console.log(`listings.ctrl.js > 87: missing ${missingField}`);
    return res.status(422).json({
      reason: "ValidationError",
      message: `Missing required field ${missingField}`
    });
  }

  let property_lat, property_lon;
  const geocodeResult = await geocoder
    .geocode(
      `${property_street} ${property_city}, ${property_state} ${property_zip}`
    )
    .then(result => {
      const { latitude, longitude } = result[0];
      console.log(`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 112`);
      console.log(`listings.ctrl.js > 108`);
      console.log({ property_lat: latitude, property_lon: longitude });
      property_lat = latitude;
      property_lon = longitude;
      if (!property_lat) {
        property_lat = 0;
      }
      if (!property_lon) {
        property_lon = 0;
      }
    })
    .catch(err => {
      console.log(`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 124`);
      console.log(`listings.ctrl.js > 120`);
      console.error(err);
      return err;
    });

  if (!property_lat) {
    property_lat = 0;
  }
  if (!property_lon) {
    property_lon = 0;
  }
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 136");
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
    )
    .then(listings => {
      const listing = listings[0];
      res.locals.testData = listing;
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

const updateListing = async (req, res, next) => {
  const updates = { ...req.body };
  console.log(`listings.ctrl.js > 187`);
  console.log(updates);
  const { id } = req.params;
  if (!updates || !Object.keys(updates).length) {
    return res.status(404).json({ message: "No updates submitted" });
  }

  if (
    updates.property_street &&
    updates.property_city &&
    updates.property_state &&
    updates.property_zip
  ) {
    let property_lat, property_lon;
    await geocoder
      .geocode(
        `${updates.property_street} ${updates.property_city}, ${updates.property_state} ${updates.property_zip}`
      )
      .then(result => {
        const { latitude, longitude } = result[0];
        console.log(`listings.ctrl.js > 207`);
        console.log({ property_lat: latitude, property_lon: longitude });
        property_lat = latitude;
        property_lon = longitude;
        if (!property_lat) {
          property_lat = 0;
        }
        if (!property_lon) {
          property_lon = 0;
        }
      })
      .catch(err => {
        console.log(`listings.ctrl.js > 219`);
        console.error(err);
        return err;
      });

    updates.property_lat = property_lat;
    updates.property_lon = property_lon;
    console.log(`listings.ctrl.js > 226: updates`);
    console.log(updates);
  }
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 229");
  return listings
    .updateListing(id, updates)
    .then(listing => {
      console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 233");
      console.log(listing);
      if (listing.message || !listing) {
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 236");
        console.log(listing);
        return res.status(404).json({
          message:
            listing.message ||
            "An error occured while trying to update this listing"
        });
      } else {
        res.locals.testData = listing;
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 245");
        console.log(res.locals.testData);
        return res.status(200).json(listing);
      }
    })
    .catch(err => {
      console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 251");
      console.log(err.message);
      res.status(500).json({ message: err.message });
    });
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
    .catch(err => res.status(500).json({ message: err.message }));
};

/** Get all listings
 *  @returns  {Array|Object}   Array of listing objects OR error message
 */
const getListings = (req, res, next) => {
  return listings
    .getListings()
    .then(listings => res.status(200).json(listings))
    .catch(err => res.status(500).json({ message: err.message }));
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
    .catch(err => res.status(500).json({ message: err.message }));
};

/** Get user listings
 *  @param    {String}   userId   user Id.
 *  @returns  {Array|Object}   Array of listing objects OR error message
 */
const getUserListings = (req, res, next) => {
  return listings
    .getUserListings(req.params.userId)
    .then(listings => {
      if (!listings || listings.message) {
        console.log(listings.message);
        return res
          .status(404)
          .json({ message: listings.message || "No Listings Found" });
      } else {
        res.status(200).json(listings);
      }
    })
    .catch(err => res.status(500).json({ message: err.message }));
};

/* ================================ EXPORT ================================= */

module.exports = {
  createListing,
  updateListing,
  deleteListing,
  getListingById,
  getUserListings,
  getListings
};

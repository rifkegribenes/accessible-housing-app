// test/models_listing_spec.js
/* globals describe afterEach it beforeEach */

/* ================================= SETUP ================================= */

process.env.NODE_ENV = "testing";

const { assert } = require("chai");
const { db, TABLES } = require("../app/config/knex");
const listing = require("../db/models/listings");
const utils = require("../app/utils");
const knexCleaner = require("knex-cleaner");

const listing1 = {
  property_name: "name",
  property_street: "street",
  property_city: "city",
  property_state: "OR",
  property_zip: "12345",
  property_quadrant: "NE",
  property_lat: null,
  property_lon: null,
  property_county: "multnomah",
  property_phone: "1234567890",
  property_email: "test@test.com",
  listing_url: null,
  application_url: null,
  available_date: null,
  studio_l: 0,
  studio_h: 0,
  br1_l: 0,
  br1_h: 0,
  br2_l: 0,
  br2_h: 0,
  br3_l: 0,
  br3_h: 0,
  br4_l: 0,
  br4_h: 0,
  br5_l: 0,
  br5_h: 0,
  primary_image: null,
  availability: null,
  features: [],
  user_id: "325d0807-1ecf-475b-a5ab-85fea40b3f9e",
  deposit: 100,
  lease_length: null,
  square_feet: null,
  age: null,
  laundry_type: "in-unit",
  parking_type: "covered",
  accessibility: null,
  pets: null,
  parking_fee: null
};

const listing2 = {
  property_name: "name2",
  property_street: "street2",
  property_city: "city2",
  property_state: "OR",
  property_zip: "67890",
  property_quadrant: "NE",
  property_lat: null,
  property_lon: null,
  property_county: "multnomah",
  property_phone: "1234567890",
  property_email: "test@test.com",
  listing_url: null,
  application_url: null,
  available_date: null,
  studio_l: 0,
  studio_h: 0,
  br1_l: 0,
  br1_h: 0,
  br2_l: 0,
  br2_h: 0,
  br3_l: 0,
  br3_h: 0,
  br4_l: 0,
  br4_h: 0,
  br5_l: 0,
  br5_h: 0,
  primary_image: null,
  availability: null,
  features: null,
  user_id: "325d0807-1ecf-475b-a5ab-85fea40b3f9e",
  deposit: 100,
  lease_length: null,
  square_feet: null,
  age: null,
  laundry_type: "in-unit",
  parking_type: "covered",
  accessibility: null,
  pets: null,
  parking_fee: null
};

const updated_property_name = "updatedName";

/* ================================= TESTS ================================= */

let id;
let id2;

describe("listing model tests", () => {
  after(() => {
    return knexCleaner.clean(db);
  });
  it("POST creates a new listing record", () => {
    return listing
      .createListing(listing1)
      .then(result => {
        console.log(result);
        assert.deepEqual(result[0].property_name, listing1.property_name);
        assert.deepEqual(result[0].property_zip, listing1.property_zip);
        return db.select("*").from(TABLES.LISTINGS);
      })
      .then(([result]) => {
        console.log(result);
        assert.equal(result.property_name, listing1.property_name);
        assert.equal(result.property_zip, listing1.property_zip);
        id = result.id;
      });
  });

  describe("", () => {
    let listingId;
    let listingId2;

    // seed with 2 listing items before each test
    beforeEach(() => {
      return listing.createListing(listing1).then(record => {
        listingId = record[0].id;
        listing.createListing(listing2).then(record => {
          listingId2 = record[0].id;
        });
      });
    });

    it("PUT updates a listing record", () => {
      const updates = {
        property_name: updated_property_name
      };
      return listing.updateListing(listingId, updates).then(results => {
        assert.equal(results[0].property_name, updated_property_name);
        assert.isAbove(results[0].updated_at, results[0].created_at);
      });
    });

    it("GET gets all listings", () => {
      return listing.getListings().then(results => {
        const arrayOfKeys = key => results.map(obj => obj[key]);
        assert.equal(Array.isArray(results), true);
        assert.include(arrayOfKeys("property_name"), updated_property_name);
      });
    });

    it("GET gets one listing by id", () => {
      return listing.getListingById(listingId).then(result => {
        assert.equal(result.property_name, updated_property_name);
        return db.select("*").from(TABLES.LISTING);
      });
    });

    it("DELETE deletes a listing", () => {
      return listing.deleteListing(listingId).then(result => {
        assert.equal(result.message, "Listing deleted successfully");
      });
    });
  });
});

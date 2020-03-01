const { mockReq, mockRes } = require("sinon-express-mock");
const sinon = require("sinon");
const chai = require("chai");
const { assert } = sinon;
const { suite, test } = require("mocha");
const nock = require("nock");
const request = require("request");
const passport = require("passport");
const knexCleaner = require("knex-cleaner");
const listingsCtrl = require("../app/controllers/listings.ctrl.js");
const usersCtrl = require("../app/controllers/users.ctrl.js");
const listing = require("../db/models/listings");
const { db } = require("../app/config/knex");
require("../app/config/passport")(passport);

let listingBody = {
  property_name: "Name",
  property_street: "1234 main st",
  property_city: "Portland",
  property_state: "OR",
  property_zip: "97206",
  property_quadrant: "SE",
  property_county: "Multnomah",
  property_phone: "1234567890",
  property_email: "test@test.com",
  listing_url: "http://www.test.com",
  vacant: true,
  available_date: new Date("2/1/2020"),
  monthly_rent: 1200,
  deposit: 400,
  primary_image: "http://www.image.com",
  features: ["cats", "gated_entry", "shower_seat"],
  bedrooms: 1,
  notes: "test",
  lease_length: 6,
  square_feet: 500,
  laundry_type: "Laundry facilities",
  parking_type: "Surface",
  parking_fee: 50
};
let userBody = {
  name: "Assata Shakur",
  email: "test@test.com",
  user_type: "manager",
  phone: "1234567890",
  company_name: "test",
  company_street: "456 other st",
  company_city: "portland",
  company_state: "or",
  company_zip: "97202",
  favorites: [],
  queries: [],
  opt_in: true,
  avatar_url: "http://www.test.com",
  google_id: "12345",
  google_token: "67890"
};
let renterBody = {
  ...userBody,
  user_type: "renter"
};

let responseStub,
  id,
  userId,
  next,
  result,
  errorMsg,
  dbMethodStub,
  dbMethods = {},
  authenticateMock,
  token,
  res = mockRes(),
  req = mockReq();

suite("listings.ctrl.js", function() {
  after(() => {
    return knexCleaner.clean(db);
  });
  beforeEach(() => {
    authenticateMock = sinon.stub(passport, "authenticate").returns(() => {});
    // create a user first, return id, and use it as the userId in the listing body
    return new Promise(resolve => {
      req = mockReq({
        body: { ...userBody },
        headers: { authorization: "test" }
      });
      usersCtrl
        .createUser(req, res, next)
        .then(newUser => {
          userId = res.locals.userId;
          listingBody.user_id = userId;
          req = mockReq({
            body: { ...listingBody },
            user: { ...newUser },
            headers: { authorization: "test" }
          });
          next = sinon.stub();
          resolve();
        })
        .catch(err => console.log(err));
    });
  });
  afterEach(function() {
    authenticateMock.restore();
    sinon.restore();
  });

  suite("listingsCtrl > createListing", function() {
    beforeEach(function() {});

    afterEach(() => {
      sinon.restore();
      res = mockRes();
      responseStub = {};
    });

    test("creates a single Listing and returns it", async function() {
      responseStub = {};
      try {
        result = await listingsCtrl.createListing(req, res, next);
        id = res.locals.listingId;
        chai.assert(res.locals.listingId);
        assert.calledWith(res.status, 200);
        chai.assert.property(res.locals.testData, "id");
        chai.assert.property(res.locals.testData, "property_name");
        chai.assert.property(res.locals.testData, "property_street");
        chai.assert.property(res.locals.testData, "created_at");
        chai.assert.property(res.locals.testData, "updated_at");
      } catch (err) {
        console.log(err);
      }
    });

    test("returns 422 if required field missing", async function() {
      req = mockReq({
        body: { ...listingBody },
        user: { ...userBody },
        headers: { authorization: "test" }
      });
      delete req.body.property_name;
      responseStub = {
        reason: "ValidationError",
        message: "Missing required field property_name"
      };
      try {
        await listingsCtrl.createListing(req, res, next);
        assert.calledWith(res.status, 422);
        assert.calledWith(res.json, responseStub);
      } catch (err) {
        console.log(err);
      }
    });

    test("returns 500 if wrong userType", async function() {
      return new Promise(resolve => {
        req = mockReq({
          body: { ...renterBody },
          headers: { authorization: "test" }
        });
        usersCtrl
          .createUser(req, res, next)
          .then(newUser => {
            userId = res.locals.userId;
            listingBody.user_id = userId;
            req = mockReq({
              body: { ...listingBody },
              user: { ...newUser },
              headers: { authorization: "test" }
            });
            next = sinon.stub();
            resolve();
          })
          .catch(err => console.log(err));
      });
      responseStub = {
        message:
          "You do not have permission to do this. Please consult an administrator."
      };
      try {
        await listingsCtrl.createListing(req, res, next);
        assert.calledWith(res.status, 500);
        assert.calledWith(res.json, responseStub);
      } catch (err) {
        console.log(err);
      }
    });

    test("returns 500 if server error", async function() {
      errorMsg = "There was an error creating the listing";
      listingModelStub = sinon
        .stub(listing, "createListing")
        .rejects({ message: errorMsg });

      try {
        await listingsCtrl.createListing(req, res);
        assert.called(listingModelStub);
        assert.calledWith(res.status, 500);
        assert.calledWith(res.json, { message: errorMsg });
      } catch (err) {
        console.log(err);
      }
    });
  });

  suite("listingsCtrl > updateListing", function() {
    beforeEach(function() {
      listingBody.property_name = "updatedName";
      return new Promise(resolve => {
        req = mockReq({
          body: {
            ...listingBody
          },
          user: { ...userBody },
          headers: { authorization: "test" },
          params: {
            id
          }
        });
        next = sinon.stub();
        resolve();
      });
    });

    afterEach(() => {
      sinon.restore();
      res = mockRes();
    });

    test("updates a listing and returns listing to client", async function() {
      try {
        await listingsCtrl.updateListing(req, res, next);
        id = res.locals.testData.id;
        chai.assert(res.locals.testData.id);
        assert.calledWith(res.status, 200);
        chai.assert.property(res.locals.testData, "id");
        chai.assert.property(res.locals.testData, "property_name");
        chai.assert.property(res.locals.testData, "property_street");
        chai.assert.property(res.locals.testData, "created_at");
        chai.assert.property(res.locals.testData, "updated_at");
        chai.assert.equal(res.locals.testData.property_name, "updatedName");
      } catch (err) {
        console.log(err);
      }
    });

    test("returns 422 if req.body missing", async function() {
      req = mockReq({
        body: {},
        user: { ...userBody },
        params: {
          id
        }
      });
      responseStub = {
        message: "No updates submitted"
      };
      try {
        await listingsCtrl.updateListing(req, res, next);
        assert.calledWith(res.status, 422);
        assert.calledWith(res.json, responseStub);
      } catch (err) {
        console.log(err);
      }
    });

    test("returns 422 if req.params.id missing", async function() {
      req = mockReq({
        body: { ...listingBody },
        user: { ...userBody }
      });
      responseStub = {
        message: "No Id Provided in URL"
      };
      try {
        await listingsCtrl.updateListing(req, res, next);
        assert.calledWith(res.status, 422);
        assert.calledWith(res.json, responseStub);
      } catch (err) {
        console.log(err);
      }
    });

    test("returns 422 if wrong userType", async function() {
      req = mockReq({
        body: { ...listingBody },
        user: { ...renterBody },
        params: { id }
      });
      responseStub = {
        message: "Permissions error"
      };
      try {
        await listingsCtrl.updateListing(req, res, next);
        assert.calledWith(res.status, 422);
        assert.calledWith(res.json, responseStub);
      } catch (err) {
        console.log(err);
      }
    });

    test("returns 500 if server error", async function() {
      req = mockReq({
        body: { ...listingBody },
        params: {
          id
        },
        user: { ...userBody }
      });
      errorMsg = "An error occurred while trying to update this listing";
      listingModelsStub = sinon
        .stub(listing, "updateListing")
        .rejects({ message: errorMsg });

      try {
        await listingsCtrl.updateListing(req, res);
        assert.called(listingModelsStub);
        assert.calledWith(res.status, 500);
        assert.calledWith(res.json, { message: errorMsg });
      } catch (err) {
        console.log(err);
      }
    });
  });

  suite("listingsCtrl > getListings", function() {
    beforeEach(function() {
      return new Promise(resolve => {
        req = mockReq({
          user: { ...userBody }
        });
        resolve();
      });
    });

    afterEach(() => {
      sinon.restore();
      res = mockRes();
    });

    test("gets all listings and returns 200", async function() {
      responseStub = [{ ...listingBody }];
      try {
        await listingsCtrl.getListings(req, res);
        assert.calledWith(res.status, 200);
        assert.calledWith(res.json, sinon.match.array);
        let result = res.locals.testData[0];
        // test that reponse matches data submitted
        // for each key that exists in the response
        Object.keys(listingBody).forEach(key => {
          chai.assert.property(result, key);
        });
      } catch (err) {
        console.log(err);
      }
    });

    test("returns 500 if server error", async function() {
      req = mockReq({
        user: { ...userBody }
      });
      errorMsg = "No Content Found";
      listingsModelStub = sinon
        .stub(listing, "getListings")
        .rejects({ message: errorMsg });
      try {
        await listingsCtrl.getListings(req, res);
        assert.called(listingsModelStub);
        assert.calledWith(res.status, 500);
        assert.calledWith(res.json, { message: errorMsg });
      } catch (err) {
        console.log(err);
      }
    });
  });

  suite("listingsCtrl > getListingById", function() {
    beforeEach(function() {
      return new Promise(resolve => {
        req = mockReq({
          params: {
            id
          }
        });
        resolve();
      });
    });

    afterEach(() => {
      sinon.restore();
      res = mockRes();
    });

    test("gets one listing by Id and returns 200", async function() {
      try {
        await listingsCtrl.getListingById(req, res);
        assert.calledWith(res.status, 200);
        let result = res.locals.testData;
        Object.keys(listingBody).forEach(key => {
          chai.assert.property(result, key);
        });
      } catch (err) {
        console.log(err);
      }
    });

    test("returns 404 if listing not found", async function() {
      errorMsg = "Listing not found";
      listingModelStub = sinon
        .stub(listing, "getListingById")
        .resolves({ message: errorMsg });

      try {
        await listingsCtrl.getListingById(req, res);
        assert.called(listingModelStub);
        assert.calledWith(res.status, 404);
        assert.calledWith(res.json, { message: errorMsg });
      } catch (err) {
        console.log(err);
      }
    });

    test("returns 500 if server error", async function() {
      errorMsg = "Listing not found";
      listingModelStub = sinon
        .stub(listing, "getListingById")
        .rejects({ message: errorMsg });

      try {
        await listingsCtrl.getListingById(req, res);
        assert.called(listingModelStub);
        assert.calledWith(res.status, 500);
        assert.calledWith(res.json, { message: errorMsg });
      } catch (err) {
        console.log(err);
      }
    });
  });

  suite("listingsCtrl > getUserListings", function() {
    beforeEach(function() {
      return new Promise(resolve => {
        req = mockReq({
          params: {
            userId
          },
          user: { ...userBody }
        });
        resolve();
      });
    });

    afterEach(() => {
      sinon.restore();
      res = mockRes();
    });

    test("gets all listings by user and returns 200", async function() {
      listingModelsStub = sinon
        .stub(listing, "getUserListings")
        .resolves([{ ...listingBody }]);
      try {
        await listingsCtrl.getUserListings(req, res);
        assert.calledWith(res.status, 200);
        let result = res.locals.testData;
        Object.keys(listingBody).forEach(key => {
          chai.assert.property(result[0], key);
        });
      } catch (err) {
        console.log(err);
      }
    });

    test("returns 404 if listings not found", async function() {
      errorMsg = "No Listings Found";
      listingModelsStub = sinon
        .stub(listing, "getUserListings")
        .resolves({ message: errorMsg });

      try {
        await listingsCtrl.getUserListings(req, res);
        assert.called(listingModelsStub);
        assert.calledWith(res.status, 404);
        assert.calledWith(res.json, { message: errorMsg });
      } catch (err) {
        console.log(err);
      }
    });

    test("returns 500 if server error", async function() {
      errorMsg = "No Listings Found";
      listingModelsStub = sinon
        .stub(listing, "getUserListings")
        .rejects({ message: errorMsg });

      try {
        await listingsCtrl.getUserListings(req, res);
        assert.called(listingModelsStub);
        assert.calledWith(res.status, 500);
        assert.calledWith(res.json, { message: errorMsg });
      } catch (err) {
        console.log(err);
      }
    });
  });

  suite("listingsCtrl > deleteListing", function() {
    beforeEach(function() {
      return new Promise(resolve => {
        req = mockReq({
          params: {
            id
          },
          user: { ...userBody }
        });
        next = sinon.stub();
        resolve();
      });
    });

    afterEach(() => {
      sinon.restore();
      res = mockRes();
    });

    test("returns 422 if wrong userType", async function() {
      req = mockReq({
        params: {
          id
        },
        user: { ...renterBody }
      });
      responseStub = {
        message: "Permissions error"
      };
      try {
        await listingsCtrl.deleteListing(req, res, next);
        assert.called(listingModelsStub);
        assert.calledWith(res.status, 422);
        assert.calledWith(res.json, responseStub);
      } catch (err) {
        console.log(err);
      }
    });

    test("deletes a listing and returns 200", async function() {
      req = mockReq({
        params: {
          id
        },
        user: { ...userBody }
      });
      responseStub = { message: "Listing deleted successfully" };
      try {
        await listingsCtrl.deleteListing(req, res, next);
        assert.calledWith(res.status, 200);
        assert.calledWith(res.json, responseStub);
      } catch (err) {
        console.log(err);
      }
    });

    test("returns 404 if listing not found", async function() {
      errorMsg = "An error occurred and the listing was not deleted.";
      listingModelStub = sinon
        .stub(listing, "deleteListing")
        .resolves({ message: errorMsg });

      try {
        await listingsCtrl.deleteListing(req, res);
        assert.called(listingModelStub);
        assert.calledWith(res.status, 404);
        assert.calledWith(res.json, { message: errorMsg });
      } catch (err) {
        console.log(err);
      }
    });

    test("returns 500 if server error", async function() {
      errorMsg = "An error occurred and the listing was not deleted.";
      listingModelStub = sinon
        .stub(listing, "deleteListing")
        .rejects({ message: errorMsg });

      try {
        await listingsCtrl.deleteListing(req, res);
        assert.called(listingModelStub);
        assert.calledWith(res.status, 500);
        assert.calledWith(res.json, { message: errorMsg });
      } catch (err) {
        console.log(err);
      }
    });
  });
});

const { mockReq, mockRes } = require("sinon-express-mock");
const sinon = require("sinon");
const chai = require("chai");
const { assert } = sinon;
const { suite, test } = require("mocha");
const nock = require("nock");
const request = require("request");
const passport = require("passport");
const NodeGeocoder = require("node-geocoder");
const knexCleaner = require("knex-cleaner");
const listingCtrl = require("../app/controllers/listings.ctrl.js");
const listing = require("../db/models/listings");
const { db } = require("../app/config/knex");
require("../app/config/passport")(passport);

let listingBody = {
    property_name: "name",
    property_street: "2475 SE Ladd Ave",
    property_city: "Portland",
    property_state: "OR",
    property_zip: "97214",
    property_quadrant: "SE",
    property_county: "multnomah",
    property_phone: "1234567890",
    property_email: "test@test.com",
    listing_url: "test.com",
    features: [],
    user_id: "325d0807-1ecf-475b-a5ab-85fea40b3f9e",
    deposit: 100,
    laundry_type: "in-unit",
    parking_type: "covered"
  },
  email = "fakeemail@test.com",
  userId = "325d0807-1ecf-475b-a5ab-85fea40b3f9e",
  name = `firstname lastname`,
  avatar_url = "http://example.com/avatar.png",
  userBody = {
    name,
    email,
    avatar_url,
    google_id: 1,
    google_token: 123,
    user_type: "renter"
  },
  adminBody = {
    name,
    email,
    avatar_url,
    google_id: 1,
    google_token: 123,
    user_type: "renter"
  };

let responseStub,
  id,
  next,
  result,
  errorMsg,
  dbMethodStub,
  dbMethods = {},
  authenticateMock,
  geocodeMock,
  token,
  res = mockRes(),
  req = mockReq();

const options = {
  provider: "google",
  apiKey: process.env.GOOGLE_MAPS_API_KEY,
  formatter: null
};

const geocoder = NodeGeocoder(options);

suite("listings.ctrl.js", function() {
  after(() => {
    return knexCleaner.clean(db);
  });
  beforeEach(() => {});
  afterEach(function() {
    sinon.restore();
  });

  suite.only("listingCtrl > createListing", function() {
    beforeEach(function() {
      return new Promise(resolve => {
        authenticateMock = sinon
          .stub(passport, "authenticate")
          .returns(() => {});
        geocodeMock = sinon
          .stub(geocoder, "geocode")
          .returns(() => [{ latitude: 0, longitude: 0 }]);
        req = mockReq({
          body: { ...listingBody },
          user: { ...adminBody },
          headers: {
            authorization: ""
          }
        });
        next = sinon.stub();
        resolve();
      });
    });

    afterEach(() => {
      authenticateMock.restore();
      geocodeMock.restore();
      sinon.restore();
      res = mockRes();
      responseStub = {};
    });

    test("creates a single Listing and returns it", async function() {
      responseStub = {};
      geocodeMock = sinon
        .stub(geocoder, "geocode")
        .returns(() => [{ latitude: 0, longitude: 0 }]);
      try {
        result = await listingCtrl.createListing(req, res, next);
        id = res.locals.testData.id;
        console.log("############################### 106");
        console.log(id);
        chai.assert(res.locals.testData.id);
        assert.calledWith(res.status, 200);
        chai.assert.property(res.locals.testData, "id");
        chai.assert.property(res.locals.testData, "property_name");
        chai.assert.property(res.locals.testData, "property_zip");
        chai.assert.property(res.locals.testData, "created_at");
        chai.assert.property(res.locals.testData, "updated_at");
      } catch (err) {
        console.log(err);
      }
    });

    test("returns 500 if wrong userType", async function() {
      req = mockReq({
        body: { ...listingBody },
        user: { ...userBody },
        headers: {
          authorization: ""
        }
      });
      responseStub = {
        message:
          "You do not have permission to do this. Please Consult an administrator."
      };
      try {
        await listingCtrl.createListing(req, res, next);
        assert.calledWith(res.status, 500);
        assert.calledWith(res.json, responseStub);
      } catch (err) {
        console.log(err);
      }
    });

    test("returns 422 if other required field missing", async function() {
      req = mockReq({
        body: { ...listingBody },
        user: { ...adminBody },
        headers: {
          authorization: ""
        }
      });
      delete req.body.property_name;
      responseStub = {
        // reason: "ValidationError",
        message: "Missing required field."
      };
      try {
        await listingCtrl.createListing(req, res, next);
        assert.calledWith(res.status, 422);
        assert.calledWith(res.json, responseStub);
      } catch (err) {
        console.log(err);
      }
    });

    test("returns 500 if server error", async function() {
      errorMsg = "There was an error creating the listing";
      listingModelsStub = sinon
        .stub(listing, "createListing")
        .rejects({ message: errorMsg });

      try {
        await listingCtrl.createListing(req, res);
        assert.called(listingModelsStub);
        assert.calledWith(res.status, 500);
        assert.calledWith(res.json, { message: errorMsg });
      } catch (err) {
        console.log(err);
      }
    });
  });

  suite("listingCtrl > updateListing", function() {
    beforeEach(function() {
      listingBody.property_name = "testName";
      return new Promise(resolve => {
        authenticateMock = sinon
          .stub(passport, "authenticate")
          .returns(() => {});
        geocodeMock = sinon
          .stub(geocoder, "geocode")
          .returns(() => [{ latitude: 0, longitude: 0 }]);
        req = mockReq({
          body: {
            ...listingBody
          },
          user: { ...adminBody },
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
      authenticateMock.restore();
      geocodeMock.restore();
      res = mockRes();
    });

    test("updates a listing record and returns listing to client", async function() {
      try {
        console.log("################################### 203");
        console.log(req.body);
        console.log(req.params.id);
        await listingCtrl.updateListing(req, res, next);
        id = res.locals.testData.id;
        chai.assert(res.locals.testData.id);
        assert.calledWith(res.status, 200);
        chai.assert.property(res.locals.testData, "id");
        chai.assert.property(res.locals.testData, "property_name");
        chai.assert(res.locals.testData.property_name, "testName");
        chai.assert.property(res.locals.testData, "created_at");
        chai.assert.property(res.locals.testData, "updated_at");
      } catch (err) {
        console.log(err);
      }
    });

    test("returns 422 if req.body missing", async function() {
      req = mockReq({
        body: {},
        user: { ...adminBody },
        params: {
          id
        }
      });
      responseStub = {
        message: "No updates submitted"
      };
      try {
        await listingCtrl.updateListing(req, res, next);
        assert.calledWith(res.status, 422);
        assert.calledWith(res.json, responseStub);
      } catch (err) {
        console.log(err);
      }
    });

    test("returns 422 if req.params.id missing", async function() {
      listingBody.propert_name = "testName";
      req = mockReq({
        body: { ...listingBody },
        user: { ...adminBody }
      });
      responseStub = {
        message: "No Id Provided in URL"
      };
      try {
        await listingCtrl.updateListing(req, res, next);
        assert.calledWith(res.status, 422);
        assert.calledWith(res.json, responseStub);
      } catch (err) {
        console.log(err);
      }
    });

    test("returns 500 if wrong userType", async function() {
      req = mockReq({
        body: { ...listingBody },
        user: { ...userBody }
      });
      responseStub = {
        message:
          "You do not have permission to do this. Please Consult an administrator."
      };
      try {
        await listingCtrl.updateListing(req, res, next);
        assert.calledWith(res.status, 500);
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
        user: { ...adminBody }
      });
      errorMsg = "An error occurred while trying to update this listing";
      listingModelStub = sinon
        .stub(listing, "updateListing")
        .rejects({ message: errorMsg });

      try {
        await listingCtrl.updateListing(req, res);
        assert.called(listingModelStub);
        assert.calledWith(res.status, 500);
        assert.calledWith(res.json, { message: errorMsg });
      } catch (err) {
        console.log(err);
      }
    });
  });

  suite("listingCtrl > getListings", function() {
    beforeEach(function() {
      return new Promise(resolve => {
        req = mockReq({
          user: { ...adminBody }
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
      responseStub[0].listing = "test";
      try {
        await listingCtrl.getListings(req, res);
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

    test("returns 500 if wrong userType", async function() {
      req = mockReq({
        user: { ...userBody }
      });
      responseStub = {
        message:
          "You do not have permission to do this. Please Consult an administrator."
      };
      try {
        await listingCtrl.getListings(req, res, next);
        assert.calledWith(res.status, 500);
        assert.calledWith(res.json, responseStub);
      } catch (err) {
        console.log(err);
      }
    });

    test("returns 500 if server error", async function() {
      req = mockReq({
        user: { ...adminBody }
      });
      errorMsg = "No Listings Found";
      listingModelStub = sinon
        .stub(listing, "getListings")
        .rejects({ message: errorMsg });
      try {
        await listingCtrl.getListings(req, res);
        assert.called(listingModelStub);
        assert.calledWith(res.status, 500);
        assert.calledWith(res.json, { message: errorMsg });
      } catch (err) {
        console.log(err);
      }
    });
  });

  suite("listingCtrl > getListingById", function() {
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
        await listingCtrl.getListingById(req, res);
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
      listingModelsStub = sinon
        .stub(listing, "getListingById")
        .resolves({ message: errorMsg });

      try {
        await listingCtrl.getListingById(req, res);
        assert.called(listingModelsStub);
        assert.calledWith(res.status, 404);
        assert.calledWith(res.json, { message: errorMsg });
      } catch (err) {
        console.log(err);
      }
    });

    test("returns 500 if server error", async function() {
      errorMsg = "Listing not found";
      listingModelsStub = sinon
        .stub(listing, "getListingById")
        .rejects({ message: errorMsg });

      try {
        await listingCtrl.getListingById(req, res);
        assert.called(listingModelsStub);
        assert.calledWith(res.status, 500);
        assert.calledWith(res.json, { message: errorMsg });
      } catch (err) {
        console.log(err);
      }
    });
  });

  suite("listingCtrl > getUserListings", function() {
    beforeEach(function() {
      return new Promise(resolve => {
        req = mockReq({
          params: {
            user_id: listingBody.user_id
          },
          user: { ...adminBody }
        });
        resolve();
      });
    });

    afterEach(() => {
      sinon.restore();
      res = mockRes();
    });

    test("gets one listing by user and returns 200", async function() {
      listingModelsStub = sinon
        .stub(listing, "getUserListings")
        .resolves([{ ...listingBody }]);
      try {
        await listingCtrl.getUserListings(req, res);
        assert.calledWith(res.status, 200);
        let result = res.locals.testData;
        Object.keys(listingBody).forEach(key => {
          chai.assert.property(result[0], key);
        });
      } catch (err) {
        console.log(err);
      }
    });

    test("returns 404 if listing not found", async function() {
      errorMsg = "Listing not found";
      listingModelsStub = sinon
        .stub(listing, "getUserListings")
        .resolves({ message: errorMsg });

      try {
        await listingCtrl.getUserListings(req, res);
        assert.called(listingModelsStub);
        assert.calledWith(res.status, 404);
        assert.calledWith(res.json, { message: errorMsg });
      } catch (err) {
        console.log(err);
      }
    });

    test("returns 500 if server error", async function() {
      errorMsg = "Listing not found";
      listingModelsStub = sinon
        .stub(listing, "getUserListings")
        .rejects({ message: errorMsg });

      try {
        await listingCtrl.getUserListings(req, res);
        assert.called(listingModelsStub);
        assert.calledWith(res.status, 500);
        assert.calledWith(res.json, { message: errorMsg });
      } catch (err) {
        console.log(err);
      }
    });
  });

  suite("listingCtrl > deleteListing", function() {
    beforeEach(function() {
      return new Promise(resolve => {
        req = mockReq({
          params: {
            id
          },
          user: { ...adminBody }
        });
        next = sinon.stub();
        resolve();
      });
    });

    afterEach(() => {
      sinon.restore();
      res = mockRes();
    });

    test("returns 500 if wrong userType", async function() {
      req = mockReq({
        params: {
          id
        },
        user: { ...userBody }
      });
      responseStub = {
        message:
          "You do not have permission to do this. Please Consult an administrator."
      };
      try {
        await listingCtrl.deleteListing(req, res, next);
        assert.called(listingModelsStub);
        assert.calledWith(res.status, 500);
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
        user: { ...adminBody }
      });
      responseStub = { message: "Listing deleted successfully" };
      try {
        await listingCtrl.deleteListing(req, res, next);
        assert.calledWith(res.status, 200);
        assert.calledWith(res.json, responseStub);
      } catch (err) {
        console.log(err);
      }
    });

    test("returns 404 if listing not found", async function() {
      errorMsg = "An error occurred and the listing was not deleted.";
      listingModelsStub = sinon
        .stub(listing, "deleteListing")
        .resolves({ message: errorMsg });

      try {
        await listingCtrl.deleteListing(req, res);
        assert.called(listingModelsStub);
        assert.calledWith(res.status, 404);
        assert.calledWith(res.json, { message: errorMsg });
      } catch (err) {
        console.log(err);
      }
    });

    test("returns 500 if server error", async function() {
      errorMsg = "An error occurred and the listing was not deleted.";
      listingModelsStub = sinon
        .stub(listing, "deleteListing")
        .rejects({ message: errorMsg });

      try {
        await listingCtrl.deleteListing(req, res);
        assert.called(listingModelsStub);
        assert.calledWith(res.status, 500);
        assert.calledWith(res.json, { message: errorMsg });
      } catch (err) {
        console.log(err);
      }
    });
  });
});

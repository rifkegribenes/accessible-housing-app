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
  });
  afterEach(function() {
    authenticateMock.restore();
    sinon.restore();
  });

  suite.only("listingCtrl > createListing", function() {
    beforeEach(function() {
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

    afterEach(() => {
      sinon.restore();
      res = mockRes();
      responseStub = {};
    });

    test.only("creates a single Listing and returns it", async function() {
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

    test("returns 500 if wrong userType", async function() {
      req = mockReq({
        body: { ...listingBody },
        user: { ...renterBody },
        headers: { authorization: "test" }
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

    test("returns 422 if required field missing", async function() {
      req = mockReq({
        body: { ...listingBody },
        user: { ...userBody },
        headers: { authorization: "test" }
      });
      delete req.body.property_name;
      responseStub = {
        // reason: "ValidationError",
        message: "Missing required field."
      };
      try {
        await listingsCtrl.createListing(req, res, next);
        assert.calledWith(res.status, 422);
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

  // suite("contCtrl > updateContent", function() {
  //   beforeEach(function() {
  //     contentBody.content_type = "bodyCopy";
  //     return new Promise(resolve => {
  //       req = mockReq({
  //         body: {
  //           ...contentBody
  //         },
  //         user: { ...adminBody },
  //         params: {
  //           id
  //         }
  //       });
  //       next = sinon.stub();
  //       resolve();
  //     });
  //   });

  //   afterEach(() => {
  //     sinon.restore();
  //     res = mockRes();
  //   });

  //   test("updates a content record and returns content to client", async function() {
  //     try {
  //       await contCtrl.updateContent(req, res, next);
  //       id = res.locals.testData.id;
  //       chai.assert(res.locals.testData.id);
  //       assert.calledWith(res.status, 200);
  //       chai.assert.property(res.locals.testData, "id");
  //       chai.assert.property(res.locals.testData, "content_type");
  //       chai.assert(res.locals.testData.content_type, "bodyCopy");
  //       chai.assert.property(res.locals.testData, "content");
  //       chai.assert.property(res.locals.testData, "created_at");
  //       chai.assert.property(res.locals.testData, "updated_at");
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });

  //   test("returns 422 if req.body missing", async function() {
  //     req = mockReq({
  //       body: {},
  //       user: { ...adminBody },
  //       params: {
  //         id
  //       }
  //     });
  //     responseStub = {
  //       message: "No updates submitted"
  //     };
  //     try {
  //       await contCtrl.updateContent(req, res, next);
  //       assert.calledWith(res.status, 422);
  //       assert.calledWith(res.json, responseStub);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });

  //   test("returns 422 if req.params.id missing", async function() {
  //     contentBody.content_type = "bodyCopy";
  //     req = mockReq({
  //       body: { ...contentBody },
  //       user: { ...adminBody }
  //     });
  //     responseStub = {
  //       message: "No Id Provided in URL"
  //     };
  //     try {
  //       await contCtrl.updateContent(req, res, next);
  //       assert.calledWith(res.status, 422);
  //       assert.calledWith(res.json, responseStub);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });

  //   test("returns 500 if wrong userType", async function() {
  //     req = mockReq({
  //       body: { ...contentBody },
  //       user: { ...userBody }
  //     });
  //     responseStub = {
  //       message:
  //         "You do not have permission to do this. Please Consult an administrator."
  //     };
  //     try {
  //       await contCtrl.updateContent(req, res, next);
  //       assert.calledWith(res.status, 500);
  //       assert.calledWith(res.json, responseStub);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });

  //   test("returns 500 if server error", async function() {
  //     req = mockReq({
  //       body: { ...contentBody },
  //       params: {
  //         id
  //       },
  //       user: { ...adminBody }
  //     });
  //     errorMsg = "An error occurred while trying to update this content";
  //     contentModelsStub = sinon
  //       .stub(content, "updateContent")
  //       .rejects({ message: errorMsg });

  //     try {
  //       await contCtrl.updateContent(req, res);
  //       assert.called(contentModelsStub);
  //       assert.calledWith(res.status, 500);
  //       assert.calledWith(res.json, { message: errorMsg });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });
  // });

  // suite("contCtrl > getContent", function() {
  //   beforeEach(function() {
  //     return new Promise(resolve => {
  //       req = mockReq({
  //         user: { ...adminBody }
  //       });
  //       resolve();
  //     });
  //   });

  //   afterEach(() => {
  //     sinon.restore();
  //     res = mockRes();
  //   });

  //   test("gets all content and returns 200", async function() {
  //     responseStub = [{ ...contentBody }];
  //     responseStub[0].content = "test";
  //     try {
  //       await contCtrl.getContent(req, res);
  //       assert.calledWith(res.status, 200);
  //       assert.calledWith(res.json, sinon.match.array);
  //       let result = res.locals.testData[0];
  //       // test that reponse matches data submitted
  //       // for each key that exists in the response
  //       Object.keys(contentBody).forEach(key => {
  //         chai.assert.property(result, key);
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });

  //   test("returns 500 if wrong userType", async function() {
  //     req = mockReq({
  //       user: { ...userBody }
  //     });
  //     responseStub = {
  //       message:
  //         "You do not have permission to do this. Please Consult an administrator."
  //     };
  //     try {
  //       await contCtrl.getContent(req, res, next);
  //       assert.calledWith(res.status, 500);
  //       assert.calledWith(res.json, responseStub);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });

  //   test("returns 500 if server error", async function() {
  //     req = mockReq({
  //       user: { ...adminBody }
  //     });
  //     errorMsg = "No Content Found";
  //     contentModelStub = sinon
  //       .stub(content, "getContent")
  //       .rejects({ message: errorMsg });
  //     try {
  //       await contCtrl.getContent(req, res);
  //       assert.called(contentModelStub);
  //       assert.calledWith(res.status, 500);
  //       assert.calledWith(res.json, { message: errorMsg });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });
  // });

  // suite("contCtrl > getContentById", function() {
  //   beforeEach(function() {
  //     return new Promise(resolve => {
  //       req = mockReq({
  //         params: {
  //           id
  //         }
  //       });
  //       resolve();
  //     });
  //   });

  //   afterEach(() => {
  //     sinon.restore();
  //     res = mockRes();
  //   });

  //   test("gets one content by Id and returns 200", async function() {
  //     try {
  //       await contCtrl.getContentById(req, res);
  //       assert.calledWith(res.status, 200);
  //       let result = res.locals.testData;
  //       Object.keys(contentBody).forEach(key => {
  //         chai.assert.property(result, key);
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });

  //   test("returns 404 if content not found", async function() {
  //     errorMsg = "Content not found";
  //     contentModelsStub = sinon
  //       .stub(content, "getContentById")
  //       .resolves({ message: errorMsg });

  //     try {
  //       await contCtrl.getContentById(req, res);
  //       assert.called(contentModelsStub);
  //       assert.calledWith(res.status, 404);
  //       assert.calledWith(res.json, { message: errorMsg });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });

  //   test("returns 500 if server error", async function() {
  //     errorMsg = "Content not found";
  //     contentModelsStub = sinon
  //       .stub(content, "getContentById")
  //       .rejects({ message: errorMsg });

  //     try {
  //       await contCtrl.getContentById(req, res);
  //       assert.called(contentModelsStub);
  //       assert.calledWith(res.status, 500);
  //       assert.calledWith(res.json, { message: errorMsg });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });
  // });

  // suite("contCtrl > getContentByType", function() {
  //   beforeEach(function() {
  //     return new Promise(resolve => {
  //       req = mockReq({
  //         params: {
  //           content_type: contentBody.content_type
  //         },
  //         user: { ...adminBody }
  //       });
  //       resolve();
  //     });
  //   });

  //   afterEach(() => {
  //     sinon.restore();
  //     res = mockRes();
  //   });

  //   test("gets one content by type and returns 200", async function() {
  //     contentModelsStub = sinon
  //       .stub(content, "getContentByType")
  //       .resolves([{ ...contentBody }]);
  //     try {
  //       await contCtrl.getContentByType(req, res);
  //       assert.calledWith(res.status, 200);
  //       let result = res.locals.testData;
  //       Object.keys(contentBody).forEach(key => {
  //         chai.assert.property(result[0], key);
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });

  //   test("returns 404 if content not found", async function() {
  //     errorMsg = "Content not found";
  //     contentModelsStub = sinon
  //       .stub(content, "getContentByType")
  //       .resolves({ message: errorMsg });

  //     try {
  //       await contCtrl.getContentByType(req, res);
  //       assert.called(contentModelsStub);
  //       assert.calledWith(res.status, 404);
  //       assert.calledWith(res.json, { message: errorMsg });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });

  //   test("returns 500 if server error", async function() {
  //     errorMsg = "Content not found";
  //     contentModelsStub = sinon
  //       .stub(content, "getContentByType")
  //       .rejects({ message: errorMsg });

  //     try {
  //       await contCtrl.getContentByType(req, res);
  //       assert.called(contentModelsStub);
  //       assert.calledWith(res.status, 500);
  //       assert.calledWith(res.json, { message: errorMsg });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });
  // });

  // suite("contCtrl > deleteContent", function() {
  //   beforeEach(function() {
  //     return new Promise(resolve => {
  //       req = mockReq({
  //         params: {
  //           id
  //         },
  //         user: { ...adminBody }
  //       });
  //       next = sinon.stub();
  //       resolve();
  //     });
  //   });

  //   afterEach(() => {
  //     sinon.restore();
  //     res = mockRes();
  //   });

  //   test("returns 500 if wrong userType", async function() {
  //     req = mockReq({
  //       params: {
  //         id
  //       },
  //       user: { ...userBody }
  //     });
  //     responseStub = {
  //       message:
  //         "You do not have permission to do this. Please Consult an administrator."
  //     };
  //     try {
  //       await contCtrl.deleteContent(req, res, next);
  //       assert.called(contentModelsStub);
  //       assert.calledWith(res.status, 500);
  //       assert.calledWith(res.json, responseStub);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });

  //   test("deletes a content and returns 200", async function() {
  //     req = mockReq({
  //       params: {
  //         id
  //       },
  //       user: { ...adminBody }
  //     });
  //     responseStub = { message: "Content deleted successfully" };
  //     try {
  //       await contCtrl.deleteContent(req, res, next);
  //       assert.calledWith(res.status, 200);
  //       assert.calledWith(res.json, responseStub);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });

  //   test("returns 404 if content not found", async function() {
  //     errorMsg = "An error occurred and the content was not deleted.";
  //     contentModelsStub = sinon
  //       .stub(content, "deleteContent")
  //       .resolves({ message: errorMsg });

  //     try {
  //       await contCtrl.deleteContent(req, res);
  //       assert.called(contentModelsStub);
  //       assert.calledWith(res.status, 404);
  //       assert.calledWith(res.json, { message: errorMsg });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });

  //   test("returns 500 if server error", async function() {
  //     errorMsg = "An error occurred and the content was not deleted.";
  //     contentModelsStub = sinon
  //       .stub(content, "deleteContent")
  //       .rejects({ message: errorMsg });

  //     try {
  //       await contCtrl.deleteContent(req, res);
  //       assert.called(contentModelsStub);
  //       assert.calledWith(res.status, 500);
  //       assert.calledWith(res.json, { message: errorMsg });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });
  // });
});

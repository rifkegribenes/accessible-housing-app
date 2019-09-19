/*
   routes to handle database queries
*/

/* ================================= SETUP ================================= */

const router = require("express").Router();
const passport = require("passport");

/* =========================== LOAD CONTROLLERS ============================ */

const userCtrl = require("../controllers/users.ctrl");
const authCtrl = require("../controllers/auth.ctrl");
const listingCtrl = require("../controllers/listings.ctrl");

/* ============================== AUTH ROUTES =========================== */

// GOOGLE AUTH WITH PASSPORT
//   Example: GET >> /auth/google
//   Secured: no
//   Expects: null
//   Returns: Redirect to google callback route on success.
//
router.get(
  "/auth/google",
  passport.authenticate(
    "google",
    { session: false },
    { scope: ["profile", "email"] }
  )
);

// GOOGLE CALLBACK ROUTE
//   Example: GET >> /auth/google/callback
//   Secured: no
//   Expects: null
//   Returns: User object and token.
//
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { session: false }),
  authCtrl.googleCallback
);

/* ============================== USER ROUTES =========================== */

// CREATE A USER
//   Example: POST >> /api/user
//   Secured: no
//   Expects:
//     request body properties : {
//           email           : String
//           name            : String
//           user_type       : String
//           phone           : String
//           company_name    : String
//           company_street  : String
//           company_city    : String
//           company_state   : String
//           company_zip     : String
//           favorites       : Array
//           queries         : Array
//           opt_in          : Boolean
//           avatar_url      : String
//           google_id       : String
//           google_token    : String
//           avatar_url      : String
//           google_id       : String
//           google_token    : String
//        }
//   Returns: JSON new user object on success.
//
router.post("/user", userCtrl.createUser);

// UPDATE A USER
//   Example: PUT >> /api/user/:id
//   Secured: yes
//   Expects:
//     1) request body properties : {
//          updates         : Object {
//                email           : String
//                name            : String
//                user_type       : String
//                phone           : String
//                company_name    : String
//                company_street  : String
//                company_city    : String
//                company_state   : String
//                company_zip     : String
//                favorites       : Array
//                queries         : Array
//                opt_in          : Boolean
//                avatar_url      : String
//                google_id       : String
//                google_token    : String
//                avatar_url      : String
//                google_id       : String
//                google_token    : String
//              }
//      2) request params         : {
//          id              : String
//      }
//   Returns: JSON updated user object on success.
//
router.put("/user/:id", authCtrl.requireAuth, userCtrl.updateUser);

// GET ONE USER
//   Example: GET >> /api/user/80f5ad9a-9c1f-4df0-813b-c7bdc339d7b3
//   Secured: no
//   Expects:
//     1) request params : {
//          id : String
//        }
//   Returns: JSON user object on success.
//
router.get("/user/:id", userCtrl.getUserById);

// GET ALL USERS
//   Example: GET >> /api/user/
//   Secured: no
//   Expects: null
//   Returns: Array of user objects on success.
//
router.get("/user/", userCtrl.getUsers);

// DELETE USER
//   Example: DELETE >> /api/user/80f5ad9a-9c1f-4df0-813b-c7bdc339d7b3
//   Secured: yes
//   Expects:
//     1) request params : {
//          id : String
//        }
//   Returns: success message on success.
//

router.delete("/user/:id", authCtrl.requireAuth, userCtrl.deleteUser);

/* ============================= LISTING ROUTES ============================ */

// CREATE A LISTING RECORD
//   Example: POST >> /api/listing
//   Secured: yes
//   Expects:
//     request body properties : {
//        property_name     :  String
//        property_street   :  String
//        property_city     :  String
//        property_state    :  String
//        property_zip      :  String
//        property_quadrant :  String
//        property_lat      :  String
//        property_lon      :  String
//        property_county   :  String
//        property_phone    :  String
//        listing_url       :  String
//        vacant            :  Boolean
//        available_date    :  Date
//        monthly_rent      :  Number
//        primary_image     :  String
//        features          :  Array[String]
//        }
//   Returns: JSON listing object on success.
//
router.post("/listing", authCtrl.requireAuth, listingCtrl.createListing);

// UPDATE A LISTING RECORD
//   Example: PUT >> /api/listing/:id
//   Secured: yes
//   Expects:
//     1) request body properties : {
//          updates         : Object
//          }
//      2) request params         : {
//          id              : String
//      }
//   Returns: JSON updated listing object on success.
//

router.put("/listing/:id", authCtrl.requireAuth, listingCtrl.updateListing);

// GET ONE LISTING RECORD BY ID
//   Example: GET >> /api/listing/80f5ad9a-9c1f-4df0-813b-c7bdc339d7b3
//   Secured: no
//   Expects:
//     1) request params : {
//          id : String
//        }
//   Returns: JSON listing object on success.
//
router.get("/listing/:id", listingCtrl.getListingById);

// GET ALL LISTINGS
//   Example: GET >> /api/listing
//   Secured: no
//   Expects: null
//   Returns: Array of listing objects on success.
//
router.get("/listing", listingCtrl.getListings);

// DELETE LISTING
//   Example: DELETE >> /api/listing/80f5ad9a-9c1f-4df0-813b-c7bdc339d7b3
//   Secured: yes
//   Expects:
//     1) request params : {
//          id : String
//        }
//   Returns: success message on success.
//
router.delete("/listing/:id", authCtrl.requireAuth, listingCtrl.deleteListing);

/* ================================ EXPORT ================================= */

module.exports = router;

/*
   routes to handle database queries
*/

/* ================================= SETUP ================================= */

const router = require("express").Router();
const passport = require("passport");

/* =========================== LOAD CONTROLLERS ============================ */

const userCtrl = require("../controllers/users.ctrl");
const authCtrl = require("../controllers/auth.ctrl");
// const contentCtrl = require("../controllers/content.ctrl");

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
//              email           : String
//              name            : String
//              avatar_url      : String
//             }
//        }
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

/* ============================= CONTENT ROUTES ============================ */

// CREATE A CONTENT RECORD
//   Example: POST >> /api/content
//   Secured: yes
//   Expects:
//     request body properties : {
//           content_type  : String
//           content       : String
//        }
//   Returns: JSON content object on success.
//
// router.post("/content", authCtrl.requireAuth, contentCtrl.createContent);

// UPDATE A CONTENT RECORD
//   Example: PUT >> /api/content/:id
//   Secured: yes
//   Expects:
//     1) request body properties : {
//          updates         : Object {
//              content_type  : String
//              content       : String
//             }
//        }
//      2) request params         : {
//          id              : String
//      }
//   Returns: JSON updated content object on success.
//

// router.put("/content/:id", authCtrl.requireAuth, contentCtrl.updateContent);

// GET ONE CONTENT RECORD BY ID
//   Example: GET >> /api/content/80f5ad9a-9c1f-4df0-813b-c7bdc339d7b3
//   Secured: no
//   Expects:
//     1) request params : {
//          id : String
//        }
//   Returns: JSON content object on success.
//
// router.get("/content/:id", contentCtrl.getContentById);

// GET CONTENT BY TYPE
//   Example: GET >> /api/contenttype/headline
//   Secured: yes
//   Expects:
//     1) request params : {
//          id : String
//        }
//   Returns: Array of content objects on success.
//
// router.get("/contenttype/:content_type", contentCtrl.getContentByType);

// GET ALL CONTENT
//   Example: GET >> /api/content/
//   Secured: yes
//   Expects: null
//   Returns: Array of content objects on success.
//
// router.get("/content/", authCtrl.requireAuth, contentCtrl.getContent);

// DELETE CONTENT
//   Example: DELETE >> /api/content/80f5ad9a-9c1f-4df0-813b-c7bdc339d7b3
//   Secured: yes
//   Expects:
//     1) request params : {
//          id : String
//        }
//   Returns: success message on success.
//
// router.delete("/content/:id", authCtrl.requireAuth, contentCtrl.deleteContent);

/* ========================= IMAGE ROUTES =========================== */

// UPLOAD A SINGLE IMAGE
//   Example: POST >> /api/image/single
//   Secured: yes
//   Expects:
//     file upload
//   Returns: Object
//   {
//     image: imageName,
//     location: imageLocation
//   }
//
// router.post("/image/single", imageCtrl.singleImgUpload);
// router.post("/image/single", authCtrl.requireAuth, imageCtrl.singleImgUpload);

// DELETE AN IMAGE FROM S3 BUCKET
// (this route is hit after the content is delete from the postgres database)
//   Example: DELETE >> /api/image/
//   Secured: yes
//   Expects:
//     request body: {
//        key: S3 object key
//     }
//   Returns: Success or Error message
//
// router.delete("/image/:key", authCtrl.requireAuth, imageCtrl.deleteImage);

/* ================================ EXPORT ================================= */

module.exports = router;

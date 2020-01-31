/*
   non-secured routes to serve static client SPA
*/

/* ================================= SETUP ================================= */

const router = require("express").Router();

/* =========================== INIT CONTROLLERS ============================ */

const staticCtrl = require("../static.ctrl");

/* ================================ ROUTES ================================= */

// Catch client-side routes that don't exist on the back-end.
// Redirects to /#/redirect={route}/{optional_id}
router.get("/:client_route/:id?", staticCtrl.redirectHash);

// Serve client frontend.
router.get("/", staticCtrl.serveClient);

/* ================================ EXPORT ================================= */

module.exports = router;

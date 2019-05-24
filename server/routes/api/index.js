const router = require("express").Router();
const entryRoutes = require("./entry");

// Entry routes
router.use("/entry", entryRoutes);

module.exports = router;

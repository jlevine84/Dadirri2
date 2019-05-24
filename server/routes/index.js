const path = require("path");
const router = require("express").Router();
const authRoutes = require("./auth");
const apiRoutes = require("./api");
const scrapeRoute = require("./scrape");

// Auth Routes
router.use('/auth', authRoutes);

// API Routes
router.use("/api", apiRoutes);

// Scrape Routes
router.use('/scrape', scrapeRoute)

// If no routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;

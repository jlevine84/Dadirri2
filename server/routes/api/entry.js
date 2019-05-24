const router = require("express").Router();
const entryController = require('./../../controllers/entryController');

// /api/entry/create
router.route("/create")
  .post(entryController.createEntry);

router.route("/").get(entryController.findByRange)

// /api/entry/view
router
.route("/view")
.get(entryController.findAll)

// /api/entry/:date
router
.route("/:date")
.get(entryController.findByDate)

module.exports = router;
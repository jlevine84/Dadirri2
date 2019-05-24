const express = require('express');
const router = express.Router();
const ScrapeController = require('./../../controllers/scrapeController.js')

router.route('/').get(ScrapeController.scrape)


module.exports=router;
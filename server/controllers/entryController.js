// Below controllers allow the user to retrieve by ID, create new, edit, or remove mood entries
const ObjectId = require("mongoose").Types.ObjectId
const db = require("../models")

module.exports = {
  //find all entries from a certain user//
  findAll: function(req, res) {
    if (req.user) {
      db.Entry
        .find({UserID: req.user._id}).sort({ Date: -1 })
        .then(logs => {
          res.json({allLogs:logs});
        })
        .catch(err => res.status(422).json(err));
    } else {
      return res.json({nothing});
    }
  },
  // To find a specific mood entry by Date
  findByDate: function(req, res) {
    if (req.params.date) {
      db.Entry
        .find({UserID: req.user._id, Date: req.params.date })
        .then(entry => {
          res.json({ todaysentry: entry });
        })
        .catch(err => res.status(422).json(err));
    } else {
      return res.json({ todaysentry: null });
    }
  },
  // Find entries by date range
  findByRange: function(req, res) {
    let startDate = req.query.startDate
    let endDate = req.query.endDate

    if (req.user) {
      db.Entry.find({UserID: req.user._id, Date: { $gte: startDate, $lte: endDate } }).sort({ Date: -1 })
        .then(entries => {
          res.json({ rangeData: entries})
        }).catch(err => console.log(err))
    } else {
      return res.json({ rangeData: null})
    }
  },
  
  // To create a new mood entry using the entry schema
  createEntry: function(req, res) {
    let entry = req.body
      db.Entry
       .findOneAndUpdate({UserID: req.user._id, Date: req.body.Date}, entry, {upsert: true}, function(){})
        .then((dbUser) => {
          res.json(dbUser);
        })
        .catch(err => {
          console.log(err)
          res.status(422).json(err)
        })
    },
  
  // To edit an existing mood entry
    update: function(req, res) {
      db.Entry
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => {
          res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
    }
  };
  

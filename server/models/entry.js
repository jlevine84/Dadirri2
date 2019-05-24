// -----------New Dadirri Schema---------------------------------
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new Schema({
  Mood: { type: Number, required: true },
  Energy: { type: Number, required: true },
  Anxiety: { type: Number, required: true },
  MedicineTaken: { type: Boolean, required: true },
  DailyLog: String,
  SleepHours: Number,
  Exercise: { type: Boolean, required: true },
  ExerciseAmount: String,
  Showered: { type: Boolean, required: true},
  Date: { type: Number, required: true },
  UserID: {type: String, required: true }
})

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;
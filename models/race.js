const mongoose = require("mongoose");

// Define the schema
const raceSchema = mongoose.Schema({
  office: String,
  districts: [Number],
  candidates: [{ name: String, party: String, candidateId: Number }],
  raceId: Number,
});

// Register each model with Mongoose.
// There's no need to export here because mongoose is a singleton
mongoose.model("Race", raceSchema);
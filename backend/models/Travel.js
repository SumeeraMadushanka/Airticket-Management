const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Travel = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  exDate: {
    type: Date,
  },
  email: {
    type: String,
  },
  code: {
    type: String,
  },
  nationality: {
    type: String,
  },
  passportNumber: {
    type: String,
  },
  country: {
    type: String,
  },
  mobileNumber: {
    type: Number,
  },
});

const newTravel = mongoose.model("travel", Travel); //create database collection

module.exports = newTravel;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookFlight = new Schema({
  price: {
    type: String,
  },
  startTime: {
    type: String,
  },
  endTime: {
    type: String,
  },
  stops: {
    type: String,
  },
  weight: {
    type: String,
  },
  title: {
    type: String,
  },

  departure: {
    type: String,
  },
  arrival: {
    type: String,
  },
  departing: {
    type: String,
  },
  returning: {
    type: String,
  },
  adults: {
    type: String,
  },
  child: {
    type: String,
  },
  infant: {
    type: String,
  },
  class: {
    type: String,
  },
  currency: {
    type: String,
  },
});

const newBookFlight = mongoose.model("bookFlight", BookFlight); //create database collection

module.exports = newBookFlight;

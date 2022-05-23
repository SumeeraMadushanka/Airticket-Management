const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MyBooking = new Schema({
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
});

const newMyBooking = mongoose.model("mybooking", MyBooking); //create database collection

module.exports = newMyBooking;

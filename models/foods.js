const mongoose = require("mongoose");
const express = require("express");

//Food schema
const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
  place: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = new mongoose.model("Food", FoodSchema);

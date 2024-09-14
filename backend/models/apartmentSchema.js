const mongoose = require('mongoose');
const { Schema } = mongoose;

const apartmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  deposit: {
    type: Number,
    required: true,
  },
  available: {
    type: Date,
    required: true,
  },
});

module.exports = apartmentSchema;

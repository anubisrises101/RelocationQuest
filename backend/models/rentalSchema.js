const mongoose = require('mongoose');
const { Schema } = mongoose;

const rentalSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = rentalSchema;

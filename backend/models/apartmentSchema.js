const mongoose = require("mongoose");
const user = require("./user");
const { Schema } = mongoose;

const apartmentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
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
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Apartments', apartmentSchema);

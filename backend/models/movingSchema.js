const mongoose = require('mongoose');
const { Schema } = mongoose;
const apartmentSchema = require('./apartmentSchema');
const companySchema = require('./companySchema');
const rentalSchema = require('./rentalSchema'); 

const movingSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  apartments: [{
    type: apartmentSchema,F
  }],
  departMover: {
    type: companySchema,
  },
  destMover: {
    type: companySchema,
  },
  rentals: [{
    type: rentalSchema,
  }],
  transitCost: {
    type: Number,
  },
  hotelCost: {
    type: Number,
  },
});

module.exports = mongoose.model('Moving', movingSchema);

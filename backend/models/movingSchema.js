const mongoose = require('mongoose');
const { Schema } = mongoose;
const Apartments = require('./apartmentSchema');
const Company = require('./companySchema');
const Rental = require('./rentalSchema'); 

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
    type: Schema.Types.ObjectId,
    ref: 'Apartments',
  }],
  departMover: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
  },
  destMover: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
  },
  rentals: [{
    type: Schema.Types.ObjectId,
    ref: 'Rental',
  }],
  transitCost: {
    type: Number,
  },
  hotelCost: {
    type: Number,
  },
});

module.exports = mongoose.model('Moving', movingSchema);

const mongoose = require('mongoose');
const { Schema } = mongoose;

const incomeSchema = new Schema({
  income: {
    type: Number,
    required: true,
  },
  taxes: {
    type: Number,
    required: true,
  },
});

module.exports = incomeSchema;

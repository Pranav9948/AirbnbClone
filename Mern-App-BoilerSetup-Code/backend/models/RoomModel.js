const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  place: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  images: [{
    type: String,
    required: true
  }],
  fromDate: {
    type: Date,
    required: true
  },
  toDate: {
    type: Date,
    required: true
  },
  pricePerNight: {
    type: Number,
    required: true
  },
  
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;

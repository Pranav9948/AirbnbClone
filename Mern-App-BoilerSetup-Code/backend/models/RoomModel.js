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
  image: {
    type: String,
    required: true
  },
  fromDate: {
    type: String,
    required: true
  },
  toDate: {
    type: String,
    required: true
  },
  fromTime: {
    type: String,
    required: true
  },
  toTime: {
    type: String,
    required: true
  },
  
  pricePerNight: {
    type: Number,
    required: true
  }
  
  
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;

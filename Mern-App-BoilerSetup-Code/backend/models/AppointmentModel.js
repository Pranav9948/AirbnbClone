
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    fromDate: { type: Date, required: true },
    toDate: { type: Date, required: true },
    fromTime: { type: String, required: true },
    toTime: { type: String, required: true },
    roomId: { type: mongoose.Schema.Types.ObjectId, required: true },
    names: { type: String, required: true },
    place: { type: String, required: true }
  });
  

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment
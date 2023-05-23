const express = require('express');
const router = express.Router();
const Room = require('../models/RoomModel');
const {createRoom,getAllRooms,getRoomById,bookAppointent,getallappointments}=require('../controllers/RoomControllers')

// Get all rooms
router.get('/getDetails',getAllRooms );

// Create a new room
router.post('/',createRoom);

//get room by id

router.get('/getRoomById/:id',getRoomById)

//book an appointment

router.post('/appointments/book',bookAppointent);

//get all appointments(bookings)

router.get('/getallappointments',getallappointments);
  

module.exports = router;

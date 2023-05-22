const express = require('express');
const router = express.Router();
const Room = require('../models/RoomModel');
const {createRoom,getAllRooms}=require('../controllers/RoomControllers')

// Get all rooms
router.get('/',getAllRooms );

// Create a new room
router.post('/',createRoom);

module.exports = router;

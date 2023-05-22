const Room = require('../models/RoomModel');

// Get all rooms

getAllRooms = async (req, res) => {
    try {
      const rooms = await Room.find();
      res.status(200).send({message:' fetching Room Successfull',success:true,rooms})
    } catch (err) {
      res.status(404).send({message:'Room fetching failed',success:false,err})
    }
  }

// Create a new room

createRoom = async (req, res) => {
    try {

        console.log('123',req.body);

    const { place, name, images,fromDate,toDate, pricePerNight } = req.body;
  
    // Checking if any required field is missing
    if (!place || !name || !images || !fromDate || !toDate || !pricePerNight) {
      return res.status(400).json({ message: 'Please fill all required fields', success: false });
    }
  
    const room = new Room({
      place,
      name,
      images,
      fromDate,
      toDate,
      pricePerNight
    });
  
   
      const newRoom = await room.save();
      res.status(200).json({ message: 'Room added successfully', success: true, newRoom });
    } catch (err) {
      res.status(404).json({ message: 'Failed to add room', success: false, err });
      console.log('err',err)
    }
  };
  


module.exports={

    getAllRooms,
    createRoom
}
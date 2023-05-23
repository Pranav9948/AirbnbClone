const Appointment = require("../models/AppointmentModel");
const Room = require("../models/RoomModel");

// Get all rooms
getAllRooms = async (req, res) => {
  console.log("44okkk");
  try {
    const rooms = await Room.find();
    res
      .status(200)
      .json({ message: "Fetching Rooms Successful", success: true, rooms });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Room fetching failed", success: false, error: err });
  }
};

// Create a new room

createRoom = async (req, res) => {
  try {
    console.log("12344", req.body);

    const {
      place,
      name,
      image,
      fromDate,
      toDate,
      fromTime,
      toTime,
      pricePerNight,
    } = req.body;

    const room = new Room({
      place,
      name,
      image,
      fromDate,
      toDate,
      toTime,
      fromTime,
      pricePerNight,
    });

    const newRoom = await room.save();
    console.log("okk", newRoom);
    res
      .status(200)
      .json({ message: "Room added successfully", success: true, newRoom });
  } catch (err) {
    res
      .status(404)
      .json({ message: "Failed to add room", success: false, err });
    console.log("err", err);
  }
};

//get room by id

const getRoomById = async (req, res) => {
  console.log("3333okk", req.params.id);
  try {
    const roomz = await Room.findById({ _id: req.params.id });

    res
      .status(200)
      .json({ message: "Fetching Rooms Successful", success: true, roomz });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Room fetching failed", success: false, error: err });
  }
};

// book appointment


const bookAppointent = async (req, res) => {
  try {
    const { fromDate, toDate, fromTime, toTime, roomId } = req.body;

    let place = '';
    let names = '';

    if (roomId) {
      const roomData = await Room.findById(roomId);
      if (roomData) {
        place = roomData.place;
        names = roomData.name;
      }
    }

    console.log("hii", req.body);

    const existingAppointment = await Appointment.findOne({
      fromDate: { $lte: toDate },
      toDate: { $gte: fromDate },
      roomId: roomId     });

    if (existingAppointment) {
      console.log("already booked");
      return res.status(200).json({ message: "This slot is already booked", success: false });
    }

    const newAppointment = await Appointment.create({
      fromDate: fromDate,
      toDate: toDate,
      fromTime: fromTime,
      toTime: toTime,
      names,
      place,
      roomId: roomId 
    });

    return res.status(200).json({
      message: "Appointment booked successfully",
      appointment: newAppointment,
      success: true
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred while booking the appointment", success: false });
  }
};

//get all appointments

const getallappointments = async (req, res) => {

  try {
    const appointment = await Appointment.find();
    res
      .status(200)
      .json({
        message: "Fetching appointments Successful",
        success: true,
        appointment,
      });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Room fetching failed", success: false, error: err });
  }
};

module.exports = {
  getAllRooms,
  createRoom,
  getRoomById,
  bookAppointent,
  getallappointments,
};

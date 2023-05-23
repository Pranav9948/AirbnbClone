import React, { useState } from "react";
import { Button, FormLayout, TextField } from "@shopify/polaris";
import axios from "axios";
import Navbar from "../../components/Admin/Navbar";
import Sidebar from "../../components/Admin/Sidebar";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { DatePicker, TimePicker } from "antd";
import { toast } from "react-hot-toast";

const AddRooms = () => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [pricePerNight, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(
      name,
      place,
      pricePerNight,
      image,
      fromDate,
      toDate,
      fromTime,
      toTime
    );

    try {
      const { data } = await axios.post("http://localhost:5500/api/rooms", {
        name,
        place,
        pricePerNight,
        image,
        fromDate: new Date(fromDate).toLocaleDateString(),
        toDate: new Date(toDate).toLocaleDateString(),
        fromTime: new Date(fromTime).toLocaleTimeString(),
        toTime: new Date(toTime).toLocaleTimeString(),
      });

      setName("");
      setPlace("");
      setFromDate("");
      setToDate("");
      setPrice("");
      setImage("");
      setFromTime("");
      setToTime("");

      console.log("okk", data);
      if (data.success) {
        toast.success("added room successfully");
      }
    } catch (err) {
      console.log("123", err);
      toast.error("room adding failed");
    }
  };

  const handleNameChange = (value) => setName(value);
  const handlePlaceChange = (value) => setPlace(value);
  const handleFromDateChange = (value) => setFromDate(value);
  const handleToDate = (value) => setToDate(value);
  const handlePriceChange = (value) => setPrice(value);
  const handleImageChange = (value) => setImage(value);
  const handleFromTimeChange = (time) => setFromTime(time);
  const handleToTimeChange = (time) => setToTime(time);

  return (
    <div>
      <Navbar />

      <div className="flex justify-center">
        <Sidebar />
        <div className="w-2/3 px-10 py-8 -mt-40">
          <h1 className="text-2xl font-bold mb-8">Add a New Room</h1>
          <form onSubmit={handleSubmit}>
            <FormLayout>
              <TextField
                label="Name"
                value={name}
                onChange={handleNameChange}
              />
              <TextField
                label="Place"
                value={place}
                onChange={handlePlaceChange}
              />
              <TextField
                label="Upload image"
                value={image}
                onChange={handleImageChange}
              />
              <TextField
                label="Price Per Night"
                type="number"
                value={pricePerNight}
                onChange={handlePriceChange}
              />

              <div>
                <label className="me-3 mt-10">From Date</label>
                <DatePicker
                  onChange={handleFromDateChange}
                  defaultValue={null}
                />
                <label className="ms-5 me-3 mt-10">From Time</label>
                <TimePicker
                  onChange={handleFromTimeChange}
                  defaultValue={null}
                />
              </div>

              <div>
                <label className="me-7 mb-10">To Date</label>
                <DatePicker onChange={handleToDate} defaultValue={null} />
                <label className="ms-5 me-7 mb-10">To Time</label>
                <TimePicker onChange={handleToTimeChange} defaultValue={null} />
              </div>

              <Button submit>Add Room</Button>
            </FormLayout>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRooms;

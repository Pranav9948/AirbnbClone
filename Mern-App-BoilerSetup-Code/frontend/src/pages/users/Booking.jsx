import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AlphaCard, Box, Layout, Text } from "@shopify/polaris";
import { Link } from "react-router-dom";
import { DatePicker, TimePicker } from "antd";
import { toast } from "react-hot-toast";

function Booking() {
  const { id } = useParams();
  const [roomDetails, setRoomDetails] = useState("");

  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");

  useEffect(() => {
    getRoomDetails();
  }, []);

  const handleFromDateChange = (value) => setFromDate(value);
  const handleToDate = (value) => setToDate(value);
  const handleFromTimeChange = (time) => setFromTime(time);
  const handleToTimeChange = (time) => setToTime(time);

  const getRoomDetails = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5500/api/rooms/getRoomById/${id}`
      );
    
      setRoomDetails(data.roomz);
    } catch (err) {
      console.log("123", err);
    }
  };

const handleSubmit=async(e)=>{

    console.log(e.preventDefault())
    console.log('manh',fromDate,fromTime,toDate,toTime);
    try {
        const { data } = await axios.post("http://localhost:5500/api/rooms/appointments/book", {
         
          fromDate: new Date(fromDate).toLocaleDateString(),
          toDate: new Date(toDate).toLocaleDateString(),
          fromTime: new Date(fromTime).toLocaleTimeString(),
          toTime: new Date(toTime).toLocaleTimeString(),
          roomId:id,
          
        });

        if(data.success){

            toast.success("booking made successfully")
        }

        else{

            toast.error('error booking ')
        }
  
      
  
        console.log("okk", data);
      } catch (err) {
        console.log("123", err);
      }
}



  return (
    <div className="booking">

      <Layout>
        
          
      <div style={{ padding: "0 2rem", marginTop: "50px" ,textAlign:'center', height: "1000px" }}>
  <Box width={200}>
    <AlphaCard style={{ borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <img
        src={roomDetails.image}
        alt={roomDetails.image}
        style={{ width: "500px", height: "300px",paddingLeft:'10px', borderRadius: "5px" }}
      />
      <div style={{ textAlign: "center", padding: "1rem 0" }}>
        <h3 style={{ fontSize: "4rem", fontWeight: "bold", paddingTop: "1rem", paddingBottom: "1rem" }}>
          {roomDetails.name}
        </h3>
        <p style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", paddingTop: "0.5rem", paddingBottom: "1rem" }}>{roomDetails.place}</p>
        <p style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", paddingTop: "0.5rem", paddingBottom: "1rem" }}>{roomDetails.fromDate} --- {roomDetails.toDate}</p>
        <p style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", paddingTop: "0.5rem", paddingBottom: "1rem" }}>{roomDetails.fromTime} ---  {roomDetails.toTime}</p>
        <p style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", paddingTop: "0.5rem", paddingBottom: "1rem" }}>$ {roomDetails.pricePerNight}</p>
     
      </div>


      <form onSubmit={handleSubmit}>
  <div>
    <label className="me-3 mt-10">From Date</label>
    <DatePicker onChange={handleFromDateChange} defaultValue={null} />
    <label className="ms-5 me-3 mt-10">From Time</label>
    <TimePicker onChange={handleFromTimeChange} defaultValue={null} />
  </div>

  <div>
    <label className="me-7 mb-10">To Date</label>
    <DatePicker onChange={handleToDate} defaultValue={null} />
    <label className="ms-5 me-7 mb-10">To Time</label>
    <TimePicker onChange={handleToTimeChange} defaultValue={null} />
  </div>


  <div style={{ display: "flex", justifyContent: "center" }}>
        
        <button type="submit" style={{ backgroundColor: "red", padding: "0.5rem 1rem", marginTop: "4rem", marginBottom: "4rem", color: "white" }}>
          Book Now
        </button>
        
      </div>
</form>





       
    </AlphaCard>
  </Box>
</div>

          
    
      </Layout>
    </div>
  );
}

export default Booking;

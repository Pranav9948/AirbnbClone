import React, { useEffect, useState } from "react";
import Navbar from "../../components/Admin/Navbar";
import Sidebar from "../../components/Admin/Sidebar";
import { Page, LegacyCard, DataTable } from "@shopify/polaris";
import axios from "axios";

const ViewAppointments = () => {
  const [appointmentList, setAppointmentList] = useState([]);

  useEffect(() => {
    getAppointMentData();
  }, []);

  const getAppointMentData = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5500/api/rooms/getallappointments"
      );
      setAppointmentList(data.appointment);
    } catch (err) {
      console.log(err);
    }
  };

  const message='A new Booking was made by user'

  return (
    <div>
      <Navbar />
      <Sidebar />

      <div style={{ marginLeft: "200px", marginTop: "-600px" }}>
        <div>
          <Page title="Appointments">
            <LegacyCard>
              <DataTable
                columnContentTypes={[
                  "text",
                  "text",
                  "text",
                  "text",
                  "text",
                ]}
                headings={[
                  "Message",
                  "Hotel Name",
                  "Location",
                  "From Date",
                  "To Date",
                  "From Time",
                  "To Time",
                ]}
                rows={appointmentList.map(appointment => [
                  message,
                  appointment.place,
                  appointment.names,
                  appointment.fromDate.substring(0,10),
                  appointment.toDate.substring(0,10),
                  appointment.fromTime,
                  appointment.toTime,
                ])}
              />
            </LegacyCard>
          </Page>
        </div>
      </div>
    </div>
  );
};

export default ViewAppointments;

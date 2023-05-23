import react from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Admin/Home';
import AddRooms from './pages/Admin/AddRooms';
import Booking from './pages/users/Booking';
import ViewAppointments from './pages/Admin/ViewAppointments';
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <div className="App">

<Toaster position="top-center" reverseOrder={false} />
     
     <Routes>
     
      <Route path="/admin" element={<Home/>} />
      <Route path="/add-rooms" element={<AddRooms/>} />
      <Route path="/booking/:id" element={<Booking/>} />
      <Route path="/view-bookings" element={<ViewAppointments/>} />
        
      </Routes>


    </div>
  );
}

export default App;

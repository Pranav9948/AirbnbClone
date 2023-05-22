import react from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Admin/Home';

function App() {
  return (
    <div className="App">
     
     <Routes>
      <Route path="/" element={<Home/>} />
        
      </Routes>


    </div>
  );
}

export default App;

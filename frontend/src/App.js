import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashbord";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import AddTravelDetails from "./components/AddTravelDetails";
import Adminpage from "./components/Adminpage";
import UpdateTravelDetails from "./components/UpdateTravelDetails"
import TravelDetails from "./components/TravelDetails";
import BookFlight from "./components/BookFlight";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashbord" element={[<NavBar />, <Dashboard />]} />
          <Route
            path="/addtraveldetails"
            element={[<NavBar />, <AddTravelDetails />]}
          />
          <Route path="/adminpage" element={<Adminpage />} />
          <Route path="/traveldetails" element={[<NavBar />,<TravelDetails />]} />
          <Route path="/update/:id" element={[<NavBar />,<UpdateTravelDetails />]} />
          <Route path="/bookflight" element={[<NavBar />,<BookFlight />]} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

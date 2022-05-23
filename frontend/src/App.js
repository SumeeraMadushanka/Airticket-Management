import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashbord";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import AddTravelDetails from "./components/AddTravelDetails";
import Adminpage from "./components/Adminpage";
import UpdateTravelDetails from "./components/UpdateTravelDetails";
import TravelDetails from "./components/TravelDetails";
import BookFlight from "./components/BookFlight";
import SearchResults from "./components/SearchResults";
import MyBooking from "./components/MyBooking";
import ReviewBooking from "./components/ReviewBooking";

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
          <Route
            path="/traveldetails"
            element={[<NavBar />, <TravelDetails />]}
          />
          <Route
            path="/update/:id"
            element={[<NavBar />, <UpdateTravelDetails />]}
          />
          <Route path="/bookflight" element={[<NavBar />, <BookFlight />]} />
          <Route
            path="/searchresults"
            element={[<NavBar />, <SearchResults />]}
          />
          <Route path="/mybooking" element={[<NavBar />, <MyBooking />]} />
          <Route
            path="/reviewbooking"
            element={[<NavBar />, <ReviewBooking />]}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

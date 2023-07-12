import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Bottles from "./Pages/Bottles";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import { useEffect } from "react";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/about" element={<About />}>
            About
          </Route>
          <Route path="/bottles" element={<Bottles />}>
            Bottles
          </Route>
          <Route path="/about" element={<About />}>
            About
          </Route>
          <Route path="/contact" element={<Contact />}>
            Contact
          </Route>
          <Route path="/login" element={<Login />}>
            Login
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

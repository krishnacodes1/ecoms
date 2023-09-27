import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Contact from "./Component/Contact/Contact";
import Product from "./Component/Product/Product";
import About from "./Component/About/About";
import Errorpage from "./Component/ErrorPage/Errorpage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

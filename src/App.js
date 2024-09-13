import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderContainer from "./HeaderContainer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Signin from "./pages/Signin";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
        <HeaderContainer />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

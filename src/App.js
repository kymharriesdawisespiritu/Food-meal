import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route,useNavigate, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Signin from './pages/Signin';
import Footer from './components/Footer';

function HomeRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/', { replace: true }); // Navigate to root path 
  }, [navigate]);

  return <Home />;
}

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSubmit = async (event) => {
    // ...
  };

  return (
    <BrowserRouter>
  <Header searchQuery={searchQuery} handleSubmit={handleSubmit} />
  <Routes>
    <Route index element={<HomeRedirect />} /> 
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/signin" element={<Signin />} />
  </Routes>
  <Footer />
</BrowserRouter>
  );
}

export default App;
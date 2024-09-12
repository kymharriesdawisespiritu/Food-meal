import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Signin from './pages/Signin';
import Footer from './components/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
      const data = await response.json();
      if (data.meals == null) {
        alert(`Oops there is no ${searchQuery} but you can search for your fav dish`) 
        searchQuery = setSearchQuery('');
      }
      // Update the meals state here
      setSearchQuery('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BrowserRouter>
      <Header searchQuery={searchQuery} handleSubmit={handleSubmit} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
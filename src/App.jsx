import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from "./components/navigation/Nav";
import Home from './pages/Home';
import Topfood from './pages/Topfood';
import Products from './pages/Products';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <div 
        className="lg:bg-[url('/src/assets/homeBG.png')] bg-gradient-to-r from-[#ff8a00] to-[#ffbf00] lg:bg-contain lg:bg-repeat h-screen lg:bg-center overflow-scroll"
      >
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-food" element={<Topfood />} /> {/* Fixed space to hyphen */}
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

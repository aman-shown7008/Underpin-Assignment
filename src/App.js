import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;


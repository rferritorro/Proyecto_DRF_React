import React from 'react';
import Header from './pages/Header'
import Footer from './pages/Footer'
import Home from './pages/Home/Home'
import Stations from './pages/Stations'
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/stations' element={<Stations/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
 
}

export default App;

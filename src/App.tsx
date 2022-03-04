import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Order } from './Order'
import MasonryImageList from "./MasonryImage";
import Home from './Home'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/order" element={<Order />} />
        <Route path="/gallery" element={<MasonryImageList />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;

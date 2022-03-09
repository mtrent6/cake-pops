import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Order, Delivery, Receipt } from './Order'
import MasonryImageList from "./MasonryImage";
import Home from './Home'
import { FAQ } from './FAQ'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/gallery" element={<MasonryImageList />} />
        <Route path="/order/delivery" element={<Delivery />} />
        <Route path="/order/receipt" element={<Receipt />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

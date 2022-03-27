import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Order } from './Order/Order'
import { Delivery } from "./Order/Delivery";
import { Receipt } from "./Order/Receipt";
import MasonryImageList from "./MasonryImage";
import Home from './Home'
import { MantineProvider } from '@mantine/core';
import { FAQ } from './FAQ'

function App() {
  return (
    <MantineProvider>

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
    </MantineProvider>
  )
}

export default App;

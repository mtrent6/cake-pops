import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Order, Delivery, Receipt } from './Order'
import MasonryImageList from "./MasonryImage";
import Home from './Home'
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/gallery" element={<MasonryImageList />} />
          <Route path="/order/delivery" element={<Delivery />} />
          <Route path="/order/receipt" element={<Receipt />} />


        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;

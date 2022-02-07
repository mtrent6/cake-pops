import TemporaryDrawer from "./Drawer";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { useState } from "react";

export const Order = () => {
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [address, setAddress] = useState("");

  const handleDateChange = (value) => {
    setDate(value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleZipChange = (event) => {
    setZip(event.target.value);
  };

  return (
    <>
      <TemporaryDrawer />
      <div className="bg-ambar-50 flex flex-col h-screen text-center">
        <p style={{ fontSize: 14, marginBottom: 10 }}>
          {" "}
          Create your cakepop order below!{" "}
        </p>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              value={name}
              label="Name"
              onChange={handleNameChange}
            />
            <TextField
              required
              id="outlined-required"
              value={number}
              inputProps={{ inputMode: 'numeric' }}
              onChange={handleNumberChange}
              label="Phone Number"
            />
            <TextField
              required
              id="outlined-required"
              value={email}
              onChange={handleEmailChange}
              label="Email"
            />
            <TextField
              required
              id="outlined-required"
              value={quantity}
              inputProps={{ inputMode: 'numeric' }}
              onChange={handleQuantityChange}
              label="Quantity"
            />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date You Need Cake Pops By"
                value={date}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <TextField
              required
              id="outlined-required"
              value={address}
              label="Address"
              onChange={handleAddressChange}
            />
            <TextField
              required
              id="outlined-required"
              value={city}
              label="City"
              onChange={handleCityChange}
            />
            <TextField
              required
              id="outlined-required"
              value={state}
              label="State"
              onChange={handleStateChange}
            />
            <TextField
              required
              id="outlined-required"
              value={zip}
              inputProps={{ inputMode: 'numeric' }}
              label="Zip"
              onChange={handleZipChange}
            />
          </div>
        </Box>
      </div>
    </>
  );
};

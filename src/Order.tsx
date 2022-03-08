import TemporaryDrawer from "./Drawer";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useEffect } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import { Outlet, Link } from "react-router-dom";



export const Delivery = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [address, setAddress] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
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
        <p style={{ fontSize: 14, marginBottom: 10, marginTop: 5 }}>
          Enter your personal information below
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
              inputProps={{ inputMode: "numeric" }}
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
              inputProps={{ inputMode: "numeric" }}
              label="Zip"
              onChange={handleZipChange}
            />

          </div>
        </Box>
        <div style={{ paddingTop: 30 }}>
          <Link to={"/order/delivery"}>
            <Button variant="contained">Submit</Button>
          </Link>
        </div>

      </div>
    </>
  )
}


export const Order = () => {

  const [quantity, setQuantity] = useState(0);

  const [flavor, setFlavor] = useState([]);

  const [date, setDate] = useState(new Date());

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleDateChange = (value) => {
    setDate(value);
  };



  const handleFlavorChange = (event) => {
    const {
      target: { value },
    } = event;

    setFlavor(typeof value === "string" ? value.split(",") : value);
  };

  const flavors = [
    "Vanilla",
    "Chocolate",
    "Lemon",
    "Carrot",
    "Red Velvet",
    "Chocolate Mint",
    "Cookies and Cream",
    "Funfetti",
    "Strawberry",
  ];
  return (
    <>
      <TemporaryDrawer />
      <div className="bg-ambar-50 flex flex-col h-screen text-center">
        <p style={{ fontSize: 14, marginBottom: 10 }}>
          Create your cakepop order below!
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
            <p style={{ paddingBottom: 5 }}>select two flavors</p>
            <FormControl style={{ width: 250 }} error={flavor.length > 2}>
              <InputLabel id="demo-simple-select-label"      >
                Flavor
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={flavor}
                label="Flavorrrrrrrr"
                multiple
                onChange={handleFlavorChange}
                input={<OutlinedInput label="Flavor" />}
                renderValue={(selected) => selected.join(", ")}
              >
                {flavors.map((flv) => (
                  <MenuItem key={flv} value={flv}>
                    {/* @ts-ignore */}
                    <Checkbox checked={flavor.indexOf(flv) > -1} />
                    <ListItemText primary={flv} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <p style={{ paddingBottom: 5 }}>select the color for your cake pops</p>

            <FormControl style={{ width: 250 }} error={flavor.length > 2}>
              <InputLabel id="demo-simple-select-label">Color</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value="test"
                label="Color"
              >
                <MenuItem value="blue">
                  <Checkbox checked={false} />
                  <div style={{ backgroundColor: "blue", width: "100%" }}>
                    <p></p>
                  </div>
                </MenuItem>
                <MenuItem value="magenta">
                  <Checkbox checked={false} />
                  <div style={{ backgroundColor: "magenta", width: "100%" }}>
                    <p></p>
                  </div>
                </MenuItem>
                <MenuItem value="yellow">
                  <Checkbox checked={false} />
                  <div style={{ backgroundColor: "yellow", width: "100%" }}>
                    <p></p>
                  </div>
                </MenuItem>
                <MenuItem value="red">
                  <Checkbox checked={false} />
                  <div style={{ backgroundColor: "red", width: "100%" }}>
                    <p></p>
                  </div>
                </MenuItem>
                <MenuItem value="green">
                  <Checkbox checked={false} />
                  <div style={{ backgroundColor: "green", width: "100%" }}>
                    <p></p>
                  </div>
                </MenuItem>
              </Select>
            </FormControl>
            <p style={{ paddingBottom: 5 }}> enter how many cake pops you wnat</p>

            <TextField
              required
              id="outlined-required"
              value={quantity}
              inputProps={{ inputMode: "numeric" }}
              onChange={handleQuantityChange}
              label="Quantity"
            />
            <p style={{ paddingBottom: 5 }}> select the date you wish to recieve them by</p>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date You Need Cake Pops By"
                value={date}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>

            <div style={{ marginTop: 80, marginBottom: 80 }}>
              <Link to={"/order/delivery"}>
                <Button variant="contained">Continue</Button>
              </Link>
            </div>

          </div>
        </Box>
      </div>
    </>
  );
};

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
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import TemporaryDrawer from "../Drawer";
import { RichTextEditor } from '@mantine/rte';
import { ColorInput } from '@mantine/core';




export const Order = () => {

  const [quantity, setQuantity] = useState(0);

  const [flavor, setFlavor] = useState([]);

  const [date, setDate] = useState(new Date());

  const [color, setColor] = useState('')

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleDateChange = (value) => {
    setDate(value);
  };

  const handleColorChange = (event) => {
    const eColor = event.target.value
    if (color === eColor) {
      setColor('')
    }
    else {

      setColor(eColor)
    }
  }


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
                renderValue={(selected) => selected.join(" and ")}
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
            <p style={{ paddingBottom: 8 }}>select the color for your cake pops</p>
            <ColorInput
              sx={{ paddingLeft: '11vh', paddingRight: '11vh' }}
              format="hex"
              withPicker={false}
              swatches={['#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']}
            />
            {/* 
            <FormControl style={{ width: 250 }} error={flavor.length > 2}>
              <InputLabel id="demo-simple-select-label">Color</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={color}
                onChange={handleColorChange}
                label="Color"
                input={<OutlinedInput label="Color" />}
                renderValue={(selected) => selected}

              >
                <MenuItem value="blue" style={{ backgroundColor: 'blue', color: 'white' }}>
                  <ListItemText primary={'blue'} />


                </MenuItem>
                <MenuItem style={{ backgroundColor: 'magenta' }} value="magenta">
                  <ListItemText primary={'magenta'} />

                </MenuItem>
                <MenuItem style={{ backgroundColor: 'yellow' }} value="yellow">
                  <ListItemText primary={'yellow'} />

                </MenuItem>
                <MenuItem style={{ backgroundColor: 'red' }} value="red">
                  <ListItemText primary={'red'} />
                </MenuItem>
                <MenuItem style={{ backgroundColor: 'green' }} value="green">
                  <ListItemText primary={'green'} />
                </MenuItem>
              </Select>
            </FormControl> */}


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
                <Button sx={{ backgroundColor: '#FAD900', color: 'black', fontFamily: 'monospace' }} variant="contained">Continue</Button>
              </Link>
            </div>

          </div>
        </Box>
      </div>
    </>
  );
};

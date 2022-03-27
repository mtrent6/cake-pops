import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
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
import { MultiSelect, Blockquote } from '@mantine/core';
import { ColorInput } from '@mantine/core';
import { NumberInput } from '@mantine/core';
import { Tabs } from '@mantine/core';
import { Photo, MessageCircle, Settings } from 'tabler-icons-react';
import { CheckIcon } from '@modulz/radix-icons';
import { ColorSwatch, Group, useMantineTheme, Center } from '@mantine/core';
import { DatePicker } from '@mantine/dates';





const mantineStyle = {
  fontFamily: 'monospace',
  // paddingLeft: '5vh',
  // paddingRight: '5vh',
  paddingTop: '1vh',
  paddingBottom: '1vh'

}
export const Order = () => {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(true);


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
      <Tabs sx={{ paddingTop: '1vh' }} color="pink" tabPadding="xl">
        <Tabs.Tab label="Order" icon={<MessageCircle size={14} />}>
          <Center>
            <div className="bg-ambar-50 flex flex-col h-screen text-center">
              <p style={{ fontSize: 14, marginBottom: 10 }}>
                Create your cakepop order below!
              </p>

              {/* <Center style={{ width: 400, height: 200 }}> */}
              <MultiSelect
                sx={mantineStyle}
                data={flavors}
                label="Select two flavors"
                placeholder="Pick all that you like"
              />

              <ColorInput
                sx={mantineStyle}
                format="hex"
                withPicker={false}
                label={"Select your colors"}
                swatches={['#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']}
              />


              <NumberInput

                sx={mantineStyle}
                defaultValue={1}
                placeholder="# of cakepops in dozens"
                label="# of cakepops in dozens"
                required
              />

              <DatePicker sx={mantineStyle} placeholder="Pick date" label="Event date" required />

              <div style={{ marginTop: 80, marginBottom: 80 }}>
                <Link to={"/order/delivery"}>
                  <Button sx={{ backgroundColor: '#FAD900', color: 'black', fontFamily: 'monospace' }} variant="contained">Continue</Button>
                </Link>
              </div>


            </div>
          </Center>
        </Tabs.Tab>
        <Tabs.Tab label="Info" icon={<Photo size={14} />}>
          <Blockquote color="pink" cite="– Forrest Gump">
            If eating cake is wrong I don't want to be right
          </Blockquote></Tabs.Tab>
      </Tabs>

    </>
  );
};

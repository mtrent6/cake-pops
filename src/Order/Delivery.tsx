import TemporaryDrawer from "../Drawer";
import { useState } from 'react'
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";


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

//       /**
//    * NOTE TO FUTURE ME, I SHOULD USE https://mantine.dev/form/use-form/ TO DO 
//    * THE FORM FOR THIS
//    * STATEFUL METHODS IS STUPID
//    * USE MANTINE
//    * GODSPEED
//    */

//   const form = useForm({
//     initialValues: {
//       email: '',
//       termsOfService: false,
//     },

//     validate: {
//       email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
//     },
//   });



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
                    <Link to={"/order/receipt"}>
                        <Button sx={{ backgroundColor: '#FAD900', fontFamily: 'monospace', color: 'black' }} variant="contained">Submit</Button>
                    </Link>
                </div>

            </div>
        </>
    )
}

import TemporaryDrawer from "../Drawer";
import { useState } from 'react'

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import { TextInput } from '@mantine/core';
import { Center } from '@mantine/core';
import { Select } from '@mantine/core';
import { states } from './helpers'

const mantineStyle = {
    fontFamily: 'monospace',
    paddingTop: '1vh',
    paddingBottom: '1vh'
}

/**
 * taken from https://tomduffytech.com/how-to-format-phone-number-in-react/
 */
function formatPhoneNumber(value) {
    // if input value is falsy eg if the user deletes the input, then just return
    if (!value) return value;

    // clean the input for any non-digit values.
    const phoneNumber = value.replace(/[^\d]/g, '');

    // phoneNumberLength is used to know when to apply our formatting for the phone number
    const phoneNumberLength = phoneNumber.length;

    // we need to return the value with no formatting if its less then four digits
    // this is to avoid weird behavior that occurs if you  format the area code to early

    if (phoneNumberLength < 4) return phoneNumber;

    // if phoneNumberLength is greater than 4 and less the 7 we start to return
    // the formatted number
    if (phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    // finally, if the phoneNumberLength is greater then seven, we add the last
    // bit of formatting and return it.
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
        3,
        6
    )}-${phoneNumber.slice(6, 10)}`;
}


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
        const formattedPhoneNumber = formatPhoneNumber(event.target.value);
        setNumber(formattedPhoneNumber);
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
            <Center>

                <div className="bg-ambar-50 flex flex-col h-screen text-center">
                    <p style={{ fontSize: 14, marginBottom: 10, marginTop: 5 }}>
                        Enter your delivery details below
                    </p>
                    <TextInput
                        sx={mantineStyle}
                        placeholder="John Doe"
                        label="Full name"
                        required
                        value={name}
                        onChange={handleNameChange}
                    />
                    <TextInput
                        sx={mantineStyle}
                        placeholder="(555) 555-5555"
                        label="Phone number"
                        inputMode="numeric"
                        required
                        value={number}
                        onChange={handleNumberChange}
                    />
                    <TextInput
                        sx={mantineStyle}
                        placeholder="xyz@gmail.com"
                        label="Email Address"
                        required
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <TextInput
                        sx={mantineStyle}
                        placeholder="123 N Street"
                        label="Street Address"
                        required
                        value={address}
                        onChange={handleAddressChange}
                    />
                    <TextInput
                        sx={mantineStyle}
                        placeholder="Richmond"
                        label="City"
                        required
                        value={city}
                        onChange={handleCityChange}
                    />
                    <Select
                        label="State"
                        placeholder="VA"
                        searchable
                        required
                        nothingFound="N/A"
                        data={states}
                        value={state}
                        onChange={handleStateChange}
                    />
                    <TextInput
                        sx={mantineStyle}
                        placeholder="23173"
                        label="ZIP code"
                        inputMode="numeric"
                        required
                        value={zip}
                        onChange={handleZipChange}
                    />
                    <div style={{ paddingTop: 30 }}>
                        <Link to={"/order/receipt"}>
                            <Button sx={{ backgroundColor: '#FAD900', fontFamily: 'monospace', color: 'black' }} variant="contained">Submit</Button>
                        </Link>
                    </div>

                </div>
            </Center>
        </>
    )
}

export const mapStateToProps = (state) => {
    const { orderType } = state
    switch (orderType) {
        case "COOKIE":
            const { cookie } = state
            return {
                orderType, cookie
            }
        case "CUSTOM":
            const { custom } = state
            return {
                orderType, custom
            }
        case "SIGNATURE":
            const { signature } = state
            return {
                signature, orderType
            }
        default:
            return {}
    }
}


export default connect(mapStateToProps)(Delivery);

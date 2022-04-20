import TemporaryDrawer from "../Drawer";
import { useState } from 'react'
import { Link } from "react-router-dom";
import { Box, TextInput, NumberInput, Button, Group } from '@mantine/core';

import { connect } from "react-redux";
import { Center } from '@mantine/core';
import { Select } from '@mantine/core';
import { states, formatPhoneNumber, emailOrder } from './helpers'
import { useForm } from '@mantine/form';

const mantineStyle = {
    fontFamily: 'monospace',
    paddingTop: '1vh',
    paddingBottom: '1vh'
}


export const Delivery = (props) => {

    const [number, setNumber] = useState("");

    const handleNumberChange = (event) => {
        const formattedPhoneNumber = formatPhoneNumber(event.target.value);
        setNumber(formattedPhoneNumber);
    };

    const email = (values) => {
        const order = { ...props }
        delete order.dispatch
        values.number = number
        const email = {
            order,
            deliveryInfo: values

        }
        emailOrder(email)
    }

    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            state: '',
            city: '',
            zip: '',
            address: '',
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            zip: (value) => value.length === 5 ? null : 'Invalid zip code'
        },
    });



    return (
        <>
            <TemporaryDrawer />
            <Center>
                <form onSubmit={form.onSubmit((values) => email(values))}>
                    <div className="bg-ambar-50 flex flex-col h-screen text-center">
                        <p style={{ fontSize: 14, marginBottom: 10, marginTop: 5 }}>
                            Enter your delivery details below
                        </p>
                        <TextInput
                            sx={mantineStyle}
                            placeholder="John Doe"
                            label="Full name"
                            required
                            {...form.getInputProps('name')}
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
                            {...form.getInputProps('email')}
                        />
                        <TextInput
                            sx={mantineStyle}
                            placeholder="123 N Street"
                            label="Street Address"
                            required
                            {...form.getInputProps('address')}
                        />
                        <TextInput
                            sx={mantineStyle}
                            placeholder="Richmond"
                            label="City"
                            required
                            {...form.getInputProps('city')}
                        />
                        <Select
                            label="State"
                            placeholder="VA"
                            searchable
                            required
                            nothingFound="N/A"
                            data={states}
                            {...form.getInputProps('state')}
                        />
                        <TextInput
                            sx={mantineStyle}
                            placeholder="23173"
                            label="ZIP code"
                            inputMode="numeric"
                            required
                            {...form.getInputProps('zip')}
                        />
                        <div style={{ paddingTop: 30 }}>

                            <Button sx={{
                                backgroundColor: '#228be6 !important',
                                backgroundImage: '#228be6 !important'
                            }} type="submit">Submit</Button>
                        </div>
                    </div>
                </form>
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

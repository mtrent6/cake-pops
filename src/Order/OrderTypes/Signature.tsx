import React, { useEffect } from "react";
import { useState } from "react";
import { MultiSelect, Blockquote } from '@mantine/core';
import { ColorInput } from '@mantine/core';
import { NumberInput } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { Center } from '@mantine/core';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


export const Signature = ({ setSignatureOrder, mantineStyle }) => {
    const [quantity, setQuantity] = useState<number>(0);

    const [flavor, setFlavor] = useState<string[]>([]);

    const [date, setDate] = useState(new Date());

    const [color, setColor] = useState('')


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
        <Center>
            <div className="bg-ambar-50 flex flex-col h-screen text-center">
                <p style={{ fontSize: 14, marginBottom: 10, paddingTop: 0 }}>
                    Create your cakepop order below!
                </p>

                <MultiSelect
                    sx={mantineStyle}
                    data={flavors}
                    label="Select two flavors"
                    placeholder="Pick all that you like"
                    value={flavor}
                    onChange={e => setFlavor(e!)}
                />

                <ColorInput
                    sx={mantineStyle}
                    format="hex"
                    withPicker={false}
                    label={"Select your colors"}
                    value={color}
                    onChange={(e) => setColor(e!)}
                    swatches={['#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']}
                />

                <NumberInput
                    sx={mantineStyle}
                    defaultValue={1}
                    value={quantity}
                    onChange={(e) => setQuantity(e!)}
                    placeholder="# of cakepops in dozens"
                    label="# of cakepops in dozens"
                    required
                />

                <DatePicker value={date} onChange={e => setDate(e!)} sx={mantineStyle} placeholder="Pick date" label="Event date" required />

                <div style={{ marginTop: 80, marginBottom: 80 }}>
                    <Link to={"/order/delivery"}>
                        <Button onClick={() => setSignatureOrder({ colors: color, eventDate: date, flavors: flavor, quantity: quantity })} sx={{ backgroundColor: '#FAD900', color: 'black', fontFamily: 'monospace' }} variant="contained">Continue</Button>
                    </Link>
                </div>
            </div>
        </Center>)

}

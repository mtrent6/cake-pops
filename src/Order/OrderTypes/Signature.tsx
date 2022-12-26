import React, { useEffect } from "react";
import { useState } from "react";
import { MultiSelect } from '@mantine/core';
import { ColorInput } from '@mantine/core';
import { NumberInput } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { Center } from '@mantine/core';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { forwardRef } from 'react';
import { Group, Avatar, Text, Select } from '@mantine/core';
import {flavors, colors} from "./OrderConstants"

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
    image: string;
    label: string;
    description: string;
}

export const Signature = ({ setSignatureOrder, mantineStyle }) => {
    const [quantity, setQuantity] = useState<number>(0);

    const [flavor, setFlavor] = useState<string[]>([]);

    const [date, setDate] = useState(new Date());

    const [color, setColor] = useState('');

    useEffect(() => {
        console.log('col: ' + color)
    },[color])


    const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
        ({ image, label, ...others }: ItemProps, ref) => (
            <div ref={ref} {...others}>
                <Group noWrap>
                    <Avatar src={image} />

                    <div>
                        <Text size="sm">{label}</Text>

                    </div>
                </Group>
            </div>
        )
    );

    return (
        <Center>
            <div className="bg-ambar-50 flex flex-col h-screen text-center" style={{ marginLeft: 40, marginRight: 40 }}>
                <p style={{ fontSize: 14, marginBottom: 10, paddingTop: 0 }}>
                    Create your Signature Series cake pop order below!
                </p>

                <MultiSelect
                    sx={mantineStyle}
                    data={flavors}
                    label="Select up to two flavors per dozen."
                    placeholder="Pick one or two flavor(s)"
                    value={flavor}
                    maxSelectedValues={2}
                    onChange={e => setFlavor(e!)}
                />

                <Select
                    label="Select your colors"
                    placeholder="Pick a color"
                    itemComponent={SelectItem}
                    data={colors}
                    onChange={e => setColor(e!)}
                    maxDropdownHeight={400}
                    sx={mantineStyle}
           
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

import React, { useState } from "react";
import { Textarea } from '@mantine/core';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const Cookies = ({ setCookiesOrder }) => {

    const [info, setInfo] = useState('')

    return (
        <div className="bg-ambar-50 flex flex-col h-screen text-center" style={{ marginLeft: '3vh', marginRight: '3vh' }}>
            <p style={{ paddingTop: 0, textAlign: 'center', paddingBottom: '3vh' }}>Want to order a custom cookie with your own logo or design on it? Let us know below what you want and we'll be in touch with you with further details</p>
            <Textarea
                placeholder="Hi! I would like to order 5 dozen cookies with my companies logo on them"
                required
                autosize
                value={info}
                onChange={e => setInfo(e.currentTarget.value)}
                minRows={2}
            />
            <div style={{ marginTop: 80, marginBottom: 80 }}>
                <Link to={"/order/delivery"}>
                    <Button onClick={() => setCookiesOrder(info)} sx={{ backgroundColor: '#FAD900', color: 'black', fontFamily: 'monospace' }} variant="contained">Continue</Button>
                </Link>
            </div>
        </div>
    )
}
import React, {useState} from "react";
import { Textarea } from '@mantine/core';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const Custom = ({ setCustomOrder }) => {

    const [info, setInfo] = useState('')

    return (
        <div className="bg-ambar-50 flex flex-col h-screen text-center" style={{ marginLeft: '3vh', marginRight: '3vh' }}>
            <p style={{ paddingTop: 0, textAlign: 'center', paddingBottom: '3vh' }}>Please share any information about how you want to customize your cake pops including event details, references from our gallery, or anything else. We will be in touch with you to confirm the specifics.</p>
            <Textarea
                placeholder="Hi! I have my sons birthday coming up and we would like 4 dozen cake pops. We looked at the gallery and really like 
      how this cake pop looked"
                required
                autosize
                minRows={2}
                value={info}
                onChange={e => setInfo(e.currentTarget.value)}
            />
            <div style={{ marginTop: 80, marginBottom: 80 }}>
                <Link to={"/order/delivery"}>
                    <Button onClick={() => setCustomOrder(info)} sx={{ backgroundColor: '#FAD900', color: 'black', fontFamily: 'monospace' }}
                        variant="contained">Continue</Button>
                </Link>
            </div>
        </div>)
}
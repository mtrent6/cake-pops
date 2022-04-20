import React, { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import TemporaryDrawer from "../Drawer";
import { MultiSelect, Blockquote } from '@mantine/core';
import { ColorInput } from '@mantine/core';
import { NumberInput } from '@mantine/core';
import { Tabs } from '@mantine/core';
import { Photo, MessageCircle, Settings } from 'tabler-icons-react';
import { Center } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { Textarea } from '@mantine/core';
import { connect } from "react-redux";
import { bindActionCreators, } from 'redux'
import { setSignatureOrder } from "../redux/actions";
import { Signature } from './OrderTypes/Signature'

const mantineStyle = {
  fontFamily: 'monospace',
  paddingTop: '1vh',
  paddingBottom: '1vh'
}

export const Order = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { setSignatureOrder } = props



  return (
    <div style={{ overflowX: 'hidden' }}>
      <TemporaryDrawer />
      <Tabs sx={{ paddingTop: '1vh' }} color="pink" tabPadding="xl">
        <Tabs.Tab label="Signature" icon={<MessageCircle size={14} />}>
          <Signature mantineStyle={mantineStyle} setSignatureOrder={setSignatureOrder} />

        </Tabs.Tab>
        <Tabs.Tab label="Custom" icon={<Photo size={14} />}>
          {/* Abstract belo */}
          <div className="bg-ambar-50 flex flex-col h-screen text-center" style={{ marginLeft: '3vh', marginRight: '3vh' }}>
            <p style={{ paddingTop: 0, textAlign: 'center', paddingBottom: '3vh' }}>Please share any information about how you want to customize your cake pops including event details, references from our gallery, or anything else. We will be in touch with you to confirm the specifics.</p>
            <Textarea
              placeholder="Hi! I have my sons birthday coming up and we would like 4 dozen cake pops. We looked at the gallery and really like 
              how this cake pop looked"
              required
              autosize
              minRows={2}
            />
            <div style={{ marginTop: 80, marginBottom: 80 }}>
              <Link to={"/order/delivery"}>
                <Button onClick={() => setSignatureOrder({ colors: 'blue', eventDate: 'undefined', flaors: '', quantity: 5 })} sx={{ backgroundColor: '#FAD900', color: 'black', fontFamily: 'monospace' }} variant="contained">Continue</Button>
              </Link>
            </div>
          </div>

        </Tabs.Tab>
        <Tabs.Tab label="Cookies" icon={<Photo size={14} />}>
          {/* Abstract below */}
          <div className="bg-ambar-50 flex flex-col h-screen text-center" style={{ marginLeft: '3vh', marginRight: '3vh' }}>
            <p style={{ paddingTop: 0, textAlign: 'center', paddingBottom: '3vh' }}>Want to order a custom cookie with your own logo or design on it? Let us know below what you want and we'll be in touch with you with further details</p>
            <Textarea
              placeholder="Hi! I would like to order 5 dozen cookies with my companies logo on them"
              required
              autosize
              minRows={2}
            />
            <div style={{ marginTop: 80, marginBottom: 80 }}>
              <Link to={"/order/delivery"}>
                <Button sx={{ backgroundColor: '#FAD900', color: 'black', fontFamily: 'monospace' }} variant="contained">Continue</Button>
              </Link>
            </div>
          </div>

        </Tabs.Tab>
      </Tabs>

    </div>
  );
};

const mapStateToProps = (state) => {
  return state.signature

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setSignatureOrder }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);


import React, { useEffect } from "react";

import TemporaryDrawer from "../Drawer";

import { Tabs } from '@mantine/core';
import { Photo, MessageCircle } from 'tabler-icons-react';
import { connect } from "react-redux";
import { bindActionCreators, } from 'redux'
import { setSignatureOrder, setCookiesOrder, setCustomOrder } from "../redux/actions";
import { Signature, Custom, Cookies } from './OrderTypes'

const mantineStyle = {
  fontFamily: 'monospace',
  paddingTop: '1vh',
  paddingBottom: '1vh'
}

export const Order = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { setSignatureOrder, setCustomOrder, setCookiesOrder } = props



  return (
    <div style={{ overflowX: 'hidden' }}>
      <TemporaryDrawer />
      <Tabs sx={{ paddingTop: '1vh' }} color="pink" tabPadding="xl">
        <Tabs.Tab label="Signature" icon={<MessageCircle size={14} />}>
          <Signature mantineStyle={mantineStyle} setSignatureOrder={setSignatureOrder} />
        </Tabs.Tab>
        <Tabs.Tab label="Custom" icon={<Photo size={14} />}>
          <Custom setCustomOrder={setCustomOrder} />
        </Tabs.Tab>
        <Tabs.Tab label="Cookies" icon={<Photo size={14} />}>
          <Cookies setCookiesOrder={setCookiesOrder} />
        </Tabs.Tab>
      </Tabs>

    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setSignatureOrder, setCustomOrder, setCookiesOrder }, dispatch)
}

export default connect(null, mapDispatchToProps)(Order);


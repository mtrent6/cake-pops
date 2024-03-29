import "./App.css";
import logo from "./assets/logo.jpg";
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import cake1 from "./assets/cake1.jpeg";
import cake2 from "./assets/cake2.jpeg";
import cake3 from "./assets/cake3.jpeg";
import cake4 from "./assets/cake4.jpeg";
import cake5 from "./assets/cake5.jpeg";
import cake6 from "./assets/cake6.jpeg";
import cake7 from "./assets/cake7.jpeg";
import cake8 from "./assets/cake8.jpeg";
import cake9 from "./assets/cake9.jpeg";
import cake10 from "./assets/cake10.jpeg";
import TemporaryDrawer from "./Drawer";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import Button from "@mui/material/Button";
import { Outlet, Link } from "react-router-dom";
import { Image } from '@mantine/core';

//@ts-ignore
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
//@ts-ignore
const FadeUp = batch(Fade(), Move(), Sticky());
//@ts-ignore
const animation = batch(Fade(), Sticky(), MoveOut(0, -200));
const images = [
  { url: cake1 },
  { url: cake2 },
  { url: cake3 },
  { url: cake4 },
  { url: cake5 },
  { url: cake6 },
  { url: cake7 },
  { url: cake8 },
  { url: cake9 },
  { url: cake10 },
];

function Home() {
  //@ts-ignore
  return (
    <div>
      <TemporaryDrawer />
      <div className="bg-ambar-50 flex flex-col h-screen text-center">
        <img
          alt="this is a cake pop"
          style={{
            width: 200,
            height: 100,
            alignSelf: "center",
            marginTop: 10,
          }}
          src={logo}
        ></img>

        <div style={{ alignSelf: "center", marginTop: 100 }}>
          <SimpleImageSlider
            width={window.screen.width} //only for mobile phones
            height={400}
            images={images}
            showBullets={false}
            showNavs={false}
            autoPlay={true}
          />
        </div>
        <div>
          {/* @ts-ignore */}
          <ScrollContainer>
            {/* @ts-ignore */}
            <ScrollPage page={1}>
              {/* @ts-ignore */}
              <Animator animation={animation}>
                  <span style={{ fontSize: "40px" }}>
                    <p>Share the LOVE of Cake Pops!</p>
                    <p>🎂🎂🎂</p>
                  </span>
              </Animator>
            </ScrollPage>

            {/* @ts-ignore */}
            <ScrollPage page={2}>
              {/* @ts-ignore */}

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <span style={{ fontSize: "40px" }}>
                  {/* @ts-ignore */}
                  <Animator animation={Fade()}>
                    <p> We make custom cake pops tailored to YOU!</p>
                  </Animator>
                </span>
              </div>
            </ScrollPage>
          </ScrollContainer>
        </div>
        <div
          id="aboutUs"
          style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
        >
          This section is experimental
          <p style={{fontSize: 20, fontWeight: 500}}>---Our Services---</p>
          {/* <p style={{ fontSize: 20, backgroundColor: '#2596be', color: 'white', textAlign: 'left', paddingLeft: 10, height: '5vh', paddingTop: '1vh' }}>Our Services</p> */}
          <div style={{ backgroundColor: "#eab676", width: '95%' }}>
            <p style={{ paddingTop: 0, fontSize: 20, color: 'black', textAlign: 'left', paddingLeft: 10 }}>Cakepops</p>
            <p style={{ textAlign: 'left', paddingLeft: 10, paddingTop: 0, color: '#f5f5f5', fontWeight: 500, fontSize: 18 }}>We create all kinds of cake pops, from our signature series to whatever you can imagine with our custom cake pops</p>
            <div style={{ width: 240, marginLeft: 10, paddingBottom: 5 }}>

              <Image
                radius="sm"
                src={cake1}
                alt="Random unsplash image"
              />
            </div>
          </div>
          <div style={{ backgroundColor: "#DB93B0", width: '95%' }}>
            <p style={{ paddingTop: 0, fontSize: 20, color: 'black', textAlign: 'left', paddingLeft: 10 }}>Cookies</p>
            <p style={{ textAlign: 'left', paddingLeft: 10, color: '#f5f5f5', paddingTop: 0, fontWeight: 500, fontSize: 18 }}>We also create custom cookies, if you have a logo or design you want printed on, we can do it</p>
            <div style={{ width: 240, marginLeft: 10, paddingBottom: 5 }}>

              <Image
                radius="sm"
                src={cake2}
                alt="Random unsplash image"
              />
            </div>
          </div>
          {/* <p>
            Tamara Wilson, founder of ACPC, was introduced to cake pops by her
            grandmother who was fascinated with these sweet concoctions which
            were becoming extremely popular in Tamara's hometown of San Antonio,
            Texas. Sharing a love for baking and inspired by the popular hit
            series DC Cupcakes, Tamara took a leap of faith, quit her day job,
            and started Alexandria Cake Pop Company in Alexandria, Virginia.
          </p>
          <p>
            ACPC soon became renowned for its creative abilities and delicious
            desserts. ACPC won the 2012 National Capital Area Cupcake Challenge
            for creating Chocolate Peppermint Bliss as well as second-runner up
            in the Adorable Cake Pop Contest hosted by Fox Broadcasting Company.
          </p>
          <p>
            After working with ACPC on a fundraiser, Cerisse Zellmer of Fairfax,
            Virginia was in the right place at the right time when ACPC became
            available. Seeing its performance and potential, we echoed Tamara's
            leap of faith; we jumped in. Our own decorative baking skills and
            business experience are ready to bring you fun and creative cake
            pops! Tell us your needs, or let us help you shape them. Expand your
            dessert horizons with ACPC!
          </p>
          <p>
            We enjoy spreading the LOVE of cake pops and and we also donate to
            multiple DC area chartities. Some of the charities include Cystic
            Fibrosis Foundation, Give Back Alexandria, and Operation Second
            Chance, a non-profit dedicated to serving the wounded and ill-combat
            veterans.
          </p> */}
          <div style={{ marginTop: 60, marginBottom: 80 }}>
            <Link to={"/gallery"}>
              <Button sx={{ backgroundColor: '#FAD900', color: 'black', fontFamily: 'monospace' }} variant="contained">Check out our Gallery</Button>
            </Link>
            <p style={{ fontSize: 15, padding: 20 }}>Or if you know what you want</p>

            <Link to={"/order"}>
              <Button sx={{ backgroundColor: '#FAD900', color: 'black', fontFamily: 'monospace' }} variant="contained">Order Now!</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

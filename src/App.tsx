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
//@ts-ignore
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
//@ts-ignore
const FadeUp = batch(Fade(), Move(), Sticky());

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

function App() {
  //@ts-ignore
  return (
    <div>
      <TemporaryDrawer />
      <div className="bg-ambar-50 flex flex-col h-screen text-center">
        {/* <header className="font-bold">Alexandria Cake Pops</header> */}
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
            showNavs={true}
            autoPlay={true}
          />
        </div>
        <div>
          {/* @ts-ignore */}
          <ScrollContainer>
            {/* @ts-ignore */}
            <ScrollPage page={1}>
              {/* @ts-ignore */}

              <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                <span style={{ fontSize: "40px" }}>
                  <p>Share the LOVE of Cake Pops!🎂🎂🎂</p>
                </span>
              </Animator>
            </ScrollPage>
            {/* @ts-ignore */}
            <ScrollPage page={2}>
              <Animator animation={FadeUp}>
                <span style={{ fontSize: "20px" }}>
                  <p>
                    Alexandria Cake Pop Company, also known as ACPC, started in
                    January 2012 with one goal in mind: share the LOVE of cake
                    pops!
                  </p>
                </span>
              </Animator>
            </ScrollPage>
            {/* @ts-ignore */}
            {/* <ScrollPage page={3}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <span style={{ fontSize: "40px" }}>
                  <Animator animation={ZoomInScrollOut}>
                    <img height={300} width={375} src={cake1}></img>
                  </Animator>
                  <Animator animation={FadeUp}>
                    <img height={300} width={375} src={cake4}></img>
                  </Animator>
                  <Animator animation={MoveOut(-1000, 0)}>
                    <img height={300} width={375} src={cake5}></img>
                  </Animator>
                </span>
              </div>
            </ScrollPage> */}
            {/* @ts-ignore */}
            <ScrollPage page={3}>
              {/* @ts-ignore */}
              <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                <span style={{ fontSize: "40px" }}>
                  <p>We make custom cake pops for any event for YOU!</p>
                </span>
              </Animator>
            </ScrollPage>
          </ScrollContainer>
        </div>
        <div
          id="aboutUs"
          style={{
            marginLeft: 50,
            marginRight: 50,
          }}
        >
          <p>
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
            ​​We enjoy spreading the LOVE of cake pops and and we also donate to
            multiple DC area chartities. Some of the charities include Cystic
            Fibrosis Foundation, Give Back Alexandria, and Operation Second
            Chance, a non-profit dedicated to serving the wounded and ill-combat
            veterans.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

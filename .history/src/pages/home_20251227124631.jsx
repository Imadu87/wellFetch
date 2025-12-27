import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Banner from "../components/banner";
import Choose from "../components/chooseus";
import Products from "../components/products";
import Testimonials from "../components/testimonals";
import NeedToKnow from "../components/needToKnow";
import Delivery from "../components/delivery";
import Footer from "../components/footer";
import Test from "../components/test";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Banner />
      <Choose />
      <Products />
      <Testimonials />
      {/* <Test /> */}
      <NeedToKnow />
      <Delivery />
      <Footer />
    </div>
  );
}

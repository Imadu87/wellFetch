import React from "react";
import Hero from "../components/home/hero";
import Banner from "../components/home/banner";
import Choose from "../components/home/chooseus";
import Products from "../components/home/products";
import Testimonials from "../components/home/testimonals";
import NeedToKnow from "../components/home/needToKnow";
import Delivery from "../components/home/delivery";

export default function Home() {
  return (
    <div>
      <Hero />
      <Banner />
      <Choose />
      <Products />
      <Testimonials />
      <NeedToKnow />
      <Delivery />
    </div>
  );
}

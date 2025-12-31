import React from "react";
import Header from "../utils/header";
import { Outlet } from "react-router-dom";
import Footer from "../utils/footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

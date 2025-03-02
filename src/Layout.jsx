import React from "react";
import { Outlet } from "react-router";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function Layout() {
  return (
    <>
    <Header/>
      <main className="">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default Layout;

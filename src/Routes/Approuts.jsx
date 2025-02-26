import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../Layout";
import Home from "../pages/Home";
import Marketplase from "../pages/Marketplase";
import Ranking from "../pages/Ranking";
import Singin from "../pages/Singin";
import Cannect from "../pages/cannect";

function Approuts() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplase/>} />
            <Route path="/ranking" element={<Ranking/>} />
            <Route path="/signin" element={<Singin/>} />
            <Route path="/cannect" element={<Cannect/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Approuts;

import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Records from "../components/Records";
import Shows from "../components/Shows";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Records />
      <Shows />
    </>
  );
};

export default HomePage;

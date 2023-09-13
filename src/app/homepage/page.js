import Appnav from "@/components/Appnav";
import Hero from "@/components/Hero2";
import CareerGoal from "@/components/sections/CareerGoal";
import Footer from "@/components/sections/Footer";
import Included from "@/components/sections/Included";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <Appnav />
      <Hero />
      <CareerGoal />
      <Included />
      <Footer />
    </div>
  );
};

export default Homepage;

import React, { useState } from "react";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import HomeVideo from "../components/HomeVideo/index";
import InfoSection from "../components/InfoSection/index";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HomeVideo />
      <InfoSection />
    </>
  );
};

export default Home;

import React, { useState } from "react";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import HomeVideo from "../components/HomeVideo/index";
import {homeObjOne,homeObjTwo,homeObjThree} from '../components/InfoSection/data';
import InfoSection from "../components/InfoSection/index";
import Tutorials from "../components/Tutorials";
import Footer from "../components/Footer";
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
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Tutorials />
      <InfoSection {...homeObjThree}/>
      <Footer />
    </>
  );
};

export default Home;

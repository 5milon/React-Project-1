import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import svj from '../assets/wave.svg'
const Home = () => {
  return (
    <>
      <div className="flex relative flex-col items-center justify-center min-h-[calc(100vh-116px)] ">
        <Hero/>
        <img className="w-full absolute bottom-0 " src={svj} alt="" />
      </div>
    </>
  );
};

export default Home;

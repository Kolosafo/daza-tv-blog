import Image from 'next/image'
import { ToastContainer } from 'react-toastify'
import React, {  } from "react";
import Uppernav from "./components/UpperNav/page";
import Navbar from "./components/Navbar/page";
import Slider from "./components/Slider/page";
import BlogArea from "./components/Blogarea/page";
import Footer from "./components/Footer/page";
import UpperNavMobile from "./components/UpperNav/UpperNavMobile";

const Home = () => {
  return (
    <main className=" relative w-full overflow-hidden">
      <ToastContainer />
      <UpperNavMobile />
      <Navbar />
      <Slider />
      <BlogArea />
      <Footer />
      <Uppernav />
    </main>
  );
};
export default Home;

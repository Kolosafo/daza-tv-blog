"use client"
import {useEffect} from 'react'
import { ToastContainer } from 'react-toastify'
import React, {  } from "react";
import Uppernav from "./components/UpperNav/page";
import Navbar from "./components/Navbar/page";
import Slider from "./components/Slider/page";
import BlogArea from "./components/Blogarea/page";
import Footer from "./components/Footer/page";
import UpperNavMobile from "./components/UpperNav/UpperNavMobile";
import { useDispatch } from 'react-redux';
import { home } from '../redux/navslice';
import { ThunkDispatch } from '@reduxjs/toolkit';
const Home = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  useEffect(() => {
    dispatch(home())
  }, [dispatch])
  return (
    <main className=" relative w-full overflow-hidden">
      <ToastContainer />
      <UpperNavMobile />
      <Navbar/>
      <Slider />
      <BlogArea />
      <Footer />
      {/* <Uppernav /> */}
    </main>
  );
};
export default Home;

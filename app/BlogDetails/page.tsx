"use client";
import React from "react";
import Navbar from "../components/Navbar/page";
import Footer from "../components/Footer/page";
import BlogDetailsComp from "./Compoenents/BlogDetails";
import DetailsUpperNavMobile from "./Compoenents/Uppernav/UpperNavMobile";
import DetailsUppernav from "./Compoenents/Uppernav/page";
import { useSearchParams } from "next/navigation";

export default function BlogDetails() {
  const params: any = useSearchParams();
  const id = params.get("id");
  return (
    <main className="w-full  overflow-hidden">
      <DetailsUpperNavMobile />

      {/* <Navbar /> */}
      {/* <Slider/> */}
      {/* <BlogArea/> */}
      <Navbar />
      <BlogDetailsComp slug={id} />
      <Footer />
      <DetailsUppernav />
    </main>
  );
}

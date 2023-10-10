import React from 'react'
import UpperNavMobile from '../components/UpperNav/UpperNavMobile'
import Navbar from '../components/Navbar/page'
import Footer from '../components/Footer/page'
import Uppernav from '../components/UpperNav/page'
import Slider from '../components/Slider/page'
import BlogArea from '../components/Blogarea/page'
import BlogDetailsComp from './Compoenents/BlogDetails/BlogDetails'
import DetailsUpperNavMobile from './Compoenents/Uppernav/UpperNavMobile'
import DetailsUppernav from './Compoenents/Uppernav/page'

export default function BlogDetails() {
  return (
    <main className="w-full  overflow-hidden">
    <DetailsUpperNavMobile/>

    {/* <Navbar /> */}
    {/* <Slider/> */}
    {/* <BlogArea/> */}
     <BlogDetailsComp/>
     <Footer/>
    <DetailsUppernav /> 
    
  </main>
  )
}

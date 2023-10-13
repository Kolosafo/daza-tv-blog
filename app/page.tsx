import Image from 'next/image'
import Uppernav from './components/UpperNav/page'
import Navbar from './components/Navbar/page'
import Slider from './components/Slider/page'
import BlogArea from './components/Blogarea/page'
import Footer from './components/Footer/page'
import UpperNavMobile from './components/UpperNav/UpperNavMobile'
import { ToastContainer } from 'react-toastify'

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <ToastContainer />

      <UpperNavMobile/>
      <Navbar />
      <Slider />
      <BlogArea />
      <Footer/>
      <Uppernav />
      
    </main>
  )
}

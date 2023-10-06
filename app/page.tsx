import Image from 'next/image'
import Uppernav from './components/UpperNav/page'
import Navbar from './components/Navbar/page'
import Slider from './components/Slider/page'
import BlogArea from './components/Blogarea/page'
import Footer from './components/Footer/page'
import UpperNavMobile from './components/UpperNav/UpperNavMobile'

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <UpperNavMobile/>
      <Navbar />
      <Slider />
      <BlogArea />
      <Footer/>
      <Uppernav />
      
    </main>
  )
}

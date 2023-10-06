import Image from 'next/image'
import Uppernav from './components/UpperNav/page'
import Navbar from './components/Navbar/page'
import Slider from './components/Slider/page'
import ImageSlider from './components/Slider/ImgSlider'
import BlogArea from './components/Blogarea/page'

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Uppernav />
      <Navbar />
      <Slider />
      <BlogArea />
    </main>
  )
}

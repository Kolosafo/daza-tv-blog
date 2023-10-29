"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "./style.css";

const SliderPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.activeIndex);
  };
  return (
    <div
      className={`${
        currentSlide === 0
          ? "blur-bg-1"
          : currentSlide === 1
          ? "blur-bg-2"
          : "blur-bg-3"
      } flex justify-center bg-[#CECECE]`}
    >
      <div className="bg-cover bg-center md:w-[60%] w-full ">
        <Swiper
          className=""
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          onSlideChange={handleSlideChange}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {" "}
          <SwiperSlide className="">
            <Image
              width={500}
              height={500}
              className="w-full"
              src={"/slider3.png"}
              alt="img"
              quality={100}
            />
            {/* <div className="absolute top-[70%] left-[0%] w-full h-full bg-gray-700 opacity-[40%] ">
              <div className="text-white opacity-100"> 
                Text here
              </div>
            </div> */}
          </SwiperSlide>
          <SwiperSlide>
            <Image
              height={500}
              width={500}
              src={"/slider1.jpg"}
              alt="img"
              quality={100}
              className="w-full"
              style={{ objectFit: "fill" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              height={500}
              width={500}
              src={"/slider2.png"}
              alt="img"
              quality={100}
              className="w-full"
              style={{ objectFit: "fill" }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default SliderPage;

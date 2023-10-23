"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import girl from "./1.jpg";
import men from "./2.png";
import onion from "./3.png";
import "./style.css"

const SliderPage = () => {
  return (
    <div className="blur-bg  flex justify-center bg-[#CECECE]  ">
      <div className=" bg-cover bg-center md:w-[60%] w-full ">
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
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {" "}
          <SwiperSlide className="">
            <Image
              className="w-full"
              src={girl}
              alt="img"
              quality={100}
              placeholder="blur"
            />
            {/* <div className="absolute top-[70%] left-[0%] w-full h-full bg-gray-700 opacity-[40%] ">
              <div className="text-white opacity-100"> 
                Text here
              </div>
            </div> */}
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={men}
              alt="img"
              quality={100}
              placeholder="blur"
              className="w-full"
              style={{ objectFit: "fill" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={onion}
              alt="img"
              quality={100}
              placeholder="blur"
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

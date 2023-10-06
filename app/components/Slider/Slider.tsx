"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import girl from "./girl1.jpg";
import men from "./men1.jpg";
import onion from "./onion1.jpg";

export default function SliderPage() {
  return (
    <div className="flex justify-center  border-red-500">
      <div className=" bg-cover bg-center w-[70%] ">
        <Swiper
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
          //   onSlideChange={() => console.log('slide change')}
          //   onSwiper={(swiper) => console.log(swiper)}
        >
          {" "}
          <SwiperSlide>
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
}

"use client";

import { useState } from "react";
import PageFive from "./pages/pageFive";
import PageFour from "./pages/pageFour";
import PageOne from "./pages/pageOne";
import PageSeven from "./pages/pageSeven";
import PageSix from "./pages/pageSix";
import PageThree from "./pages/pageThree";
import PageTwo from "./pages/pageTwo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SliderIndicator from "./components/sliderIndicator/SliderIndicator";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
});


export default function Home() {
  const [currentPage, setPage] = useState(0);

  const page = [
    <PageOne />,
    <PageTwo />,
    <PageThree />,
    <PageFour />,
    <PageFive />,
    <PageSix />,
    <PageSeven />,
  ];
  return (
    <>
      <div className={`${poppins.className} min-w-screen min-h-screen relative box-border overflow-hidden text-[1rem]`}>
        <div className="absolute w-dvw">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation
            onSlideChange={(swiper) => setPage(swiper.activeIndex)}
          >
            {page.map((data, index) => (
              <SwiperSlide key={index}>{data}</SwiperSlide>
            ))}
          </Swiper>
        </div>
        <SliderIndicator current={currentPage} length={page.length} />
      </div>
    </>
  );
}

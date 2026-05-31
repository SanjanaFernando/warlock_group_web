import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  bannerone,
  bannertwo,
  bannerthree,
  logoLight,
} from "../../assets/images";
import Image from "../designLayouts/Image";

const bannerSlides = [
  {
    id: 1,
    imgSrc: bannerone,
    title: "Fresh Deals for Every Room",
    description:
      "Discover modern essentials with prices that make updating your home easy.",
  },
  {
    id: 2,
    imgSrc: bannertwo,
    title: "New Arrivals, Better Savings",
    description:
      "Explore selected favorites and limited offers before they’re gone.",
  },
  {
    id: 3,
    imgSrc: bannerthree,
    title: "New Arrivals, Better Savings",
    description:
      "Explore selected favorites and limited offers before they’re gone.",
  },
];

const bannerLogos = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  src: logoLight,
}));

const scrollingBannerLogos = [...bannerLogos, ...bannerLogos];

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "90%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <ul
          style={{
            margin: 0,
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: 0,
            listStyle: "none",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <button
        type="button"
        className={`h-3 w-3 rounded-full border transition duration-200 ${
          i === dotActive
            ? "border-white bg-white"
            : "border-gray-400 bg-transparent opacity-70"
        }`}
        aria-label={`Go to slide ${i + 1}`}
      />
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "92%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <ul
                style={{
                  margin: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: 0,
                  listStyle: "none",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
          customPaging: (i) => (
            <button
              type="button"
              className={`h-2.5 w-2.5 rounded-full border transition duration-200 ${
                i === dotActive
                  ? "border-gray-900 bg-gray-900"
                  : "border-gray-300 bg-transparent opacity-70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ),
        },
      },
    ],
  };
  return (
    <div className="w-full bg-white">
      <div className="relative">
        <div
          className="absolute left-1 top-[2px] bottom-[8px] z-20 hidden w-10 overflow-hidden md:block md:w-[60px] lg:left-2 xl:left-3 lg:w-[100px] xl:w-[120px]"
          aria-hidden="true"
        >
          <motion.div
            className="flex h-full flex-col items-center gap-8 py-6 will-change-transform"
            animate={{ y: ["0%", "-50%"] }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          >
            {scrollingBannerLogos.map((item, index) => (
              <img
                key={`${item.id}-${index}`}
                src={item.src}
                alt=""
                className="h-auto w-7 flex-shrink-0 object-contain opacity-70 sm:w-8 md:w-[60px]  lg:w-[100px] xl:w-[120px]"
              />
            ))}
          </motion.div>
        </div>
        <Slider {...settings}>
          {bannerSlides.map((slide) => (
            <div key={slide.id} className="relative">
              <Image
                imgSrc={slide.imgSrc}
                className="w-full min-h-[250px] object-cover"
              />
              <div className="absolute bottom-0 max-w-[1920px] mx-auto left-1/2 -translate-x-1/2 md:translate-x-0 md:inset-0 flex items-center">
                <div className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-10">
                  <div className="md:max-w-[250px] ml-0 md:ml-10 lg:max-w-[300px] p-4 lg:ml-16 xl:ml-16 2xl:ml-0 xl:max-w-[400px] rounded-2xl sm:p-4 lg:p-4">
                    <p className="font-titleFont text-sm uppercase md:tracking-normal lg:tracking-[0.35em] text-iceGray/70">
                      <span className="hidden md:inline">Special Offer</span>
                    </p>
                    <h2 className="md:mt-2 lg:mt-4 font-titleFont hidden md:block text-md font-semibold leading-tight text-crispWhite md:text-2xl lg:text-3xl xl:text-5xl">
                      {slide.title}
                    </h2>
                    <p className="md:mt-2 lg:mt-4 max-w-md text-xs xl:text-xl leading-6 hidden md:block text-crispWhite/60 sm:text-md ">
                      {slide.description}
                    </p>
                    <Link
                      to="/offer"
                      className="mt-4 lg:mt-6 inline-flex items-center rounded-full px-3 bg-primeColor md:px-6 md:py-3 font-titleFont text-sm font-semibold text-crispWhite hover:text-lightText transition duration-200 hover:bg-crispWhite/60 focus:outline-none focus:ring-2 focus:ring-primeColor/50 focus:ring-offset-2"
                    >
                      See Offers
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;

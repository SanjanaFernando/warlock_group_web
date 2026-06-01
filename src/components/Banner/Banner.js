import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { AnimatePresence, motion } from "framer-motion";
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

const textRevealVariants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(0 70% 0 0)",
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0% 0 0)",
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    clipPath: "inset(0 0 0 70%)",
    filter: "blur(6px)",
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setActiveSlide(next);
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
          i === activeSlide
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
                i === activeSlide
                  ? "border-white bg-white"
                  : "border-gray-400 bg-transparent opacity-70"
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
          className="absolute left-1 top-[2px] bottom-[8px] z-20  w-[50px] overflow-hidden md:w-[60px] lg:left-2 xl:left-3 lg:w-[100px] xl:w-[120px]"
          aria-hidden="true"
        >
          <motion.div
            className="flex h-full flex-col items-center gap-4 xl:gap-8 py-6 will-change-transform"
            animate={{ y: ["0%", "-50%"] }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          >
            {scrollingBannerLogos.map((item, index) => (
              <img
                key={`${item.id}-${index}`}
                src={item.src}
                alt=""
                className="h-auto w-[50px] flex-shrink-0 object-contain opacity-70 sm:w-[60px] md:w-[60px]  lg:w-[100px] xl:w-[120px]"
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
            </div>
          ))}
        </Slider>
        <div className="absolute bottom-4 left-1/2 z-20 flex max-w-[1920px] w-full -translate-x-1/2 items-center md:inset-0 md:translate-x-0">
          <div className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-10">
            <div className="md:max-w-[250px] ml-0  md:ml-10 lg:max-w-[300px] p-4 lg:ml-16 xl:ml-16 2xl:ml-0 xl:max-w-[400px] rounded-2xl sm:p-4 lg:p-4">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={bannerSlides[activeSlide].id}
                  variants={textRevealVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="overflow-hidden"
                >
                  <motion.p
                    variants={lineVariants}
                    className="font-titleFont text-sm uppercase md:tracking-normal lg:tracking-[0.35em] text-iceGray/70"
                  >
                    <span className="hidden md:inline">Special Offer</span>
                  </motion.p>
                  <motion.h2
                    variants={lineVariants}
                    className="md:mt-2 lg:mt-4 font-titleFont hidden md:block text-md font-semibold leading-tight text-crispWhite md:text-2xl lg:text-3xl xl:text-5xl"
                  >
                    {bannerSlides[activeSlide].title}
                  </motion.h2>
                  <motion.p
                    variants={lineVariants}
                    className="md:mt-2 lg:mt-4 max-w-md text-xs xl:text-xl leading-6 hidden md:block text-crispWhite/60 sm:text-md"
                  >
                    {bannerSlides[activeSlide].description}
                  </motion.p>
                  <motion.div variants={lineVariants}>
                    <Link
                      to="/offer"
                      className="group relative md:mt-4 inline-flex -translate-x-1/2 md:translate-x-0 left-1/2 items-center md:left-0 overflow-hidden rounded-full py-1  px-3 md:px-6 md:py-3 font-titleFont text-sm font-semibold text-crispWhite transition duration-300 ease-out hover:scale-105 hover:text-crispWhite focus:outline-none focus:ring-2 focus:ring-primeColor/50 focus:ring-offset-2 lg:mt-6"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,rgba(255,255,255,0.95)_330deg,transparent_360deg)] opacity-80 blur-[1px] transition duration-300 group-hover:opacity-100 motion-safe:animate-[spin_2.8s_linear_infinite]"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute inset-[2px] rounded-full bg-primeColor shadow-[inset_0_0_0_1px_rgba(255,255,255,0.16)] transition duration-300 group-hover:bg-[#0f172a]"
                      />
                      <span className="relative z-10">See Offers</span>
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

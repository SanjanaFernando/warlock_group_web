import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { bannerone, bannertwo } from "../../assets/images";
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
];

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
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#ffffff",
                borderRight: "3px #ffffff solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "#9CA3AF",
                borderRight: "3px #9CA3AF solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
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
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#000000",
                      borderRight: "3px #111827 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "#000000",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <div className="w-full bg-white">
      <Slider {...settings}>
        {bannerSlides.map((slide) => (
          <div key={slide.id} className="relative">
            <Image imgSrc={slide.imgSrc} className="w-full object-cover" />
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-10">
                <div className="max-w-xl rounded-2xl p-6 sm:p-8 lg:p-10">
                  <p className="font-titleFont text-sm uppercase tracking-[0.35em] text-iceGray/70">
                    <span className="hidden md:inline">Special Offer</span>
                    <span className="md:hidden block">
                      Special
                      <br />
                      Offer
                    </span>
                  </p>
                  <h2 className="mt-4 font-titleFont hidden md:block text-md font-semibold leading-tight text-crispWhite sm:text-4xl lg:text-5xl">
                    {slide.title}
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-6 hidden md:block text-crispWhite/60 sm:text-base">
                    {slide.description}
                  </p>
                  <Link
                    to="/offer"
                    className="mt-6 inline-flex items-center rounded-full px-3 bg-primeColor md:px-6 md:py-3 font-titleFont text-sm font-semibold text-crispWhite hover:text-lightText transition duration-200 hover:bg-crispWhite/60 focus:outline-none focus:ring-2 focus:ring-primeColor/50 focus:ring-offset-2"
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
  );
};

export default Banner;

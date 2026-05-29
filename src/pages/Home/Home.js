import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../components/home/YearProduct/YearProduct";
import { logo } from "../../assets/images";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4 relative">
        <div
          className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${logo})`, opacity: 0.06 }}
          aria-hidden="true"
        />
        <div className="relative">
          <Sale />
          <NewArrivals />
          <BestSellers />
          <YearProduct />
          <SpecialOffers />
        </div>
      </div>
    </div>
  );
};

export default Home;

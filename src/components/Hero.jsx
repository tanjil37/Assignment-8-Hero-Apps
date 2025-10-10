import React from "react";
import { Link } from "react-router";
import playIcon from "../../src/assets/play-store.png";
import appIcon from "../../src/assets/app-store.png";
const Hero = () => {
  return (
    <div>
      {/* text */}
      <div className="bg-gray-100 text-center pt-[80px]">
        <h2 className="text-[72px] font-semibold ">
          We Build <br />
          <span className="linear-text">Productive</span> Apps
        </h2>
        <p className="text-[#627382]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
        <div className="space-x-3 mt-4">
          <Link to="https://play.google.com/store/games" target="_blank" className="btn"><img className="w-6 h-6" src={playIcon} alt="" /> Google Play</Link>
          <Link to="https://www.apple.com/app-store/" target="_blank" className="btn"><img className="w-8 h-8" src={appIcon} alt="" /> App Store</Link>
        </div>
        <img className="mx-auto mt-10" src="../../src/assets/hero.png" alt="" />
      </div>
      {/* Bg gradiendt */}
      <div className="text-white  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-center p-20 ">
        <h2 className="text-5xl font-semibold">
          Trusted by Millions, Built for You
        </h2>
        {/* total */}
        <div className="flex justify-around mx-auto mt-10">
          <div className="">
            <span className=" text-base font-normal">Total Downloads</span>
            <h2 className="text-6xl font-extrabold my-4">29.6M</h2>
            <span>21% More Than Last Month</span>
          </div>
          <div className="">
            <span className=" text-base font-normal">Total Reviews</span>
            <h2 className="text-6xl font-extrabold my-4">906k</h2>
            <span>46% More Than Last Month</span>
          </div>
          <div className="">
            <span className=" text-base font-normal">Active Apps</span>
            <h2 className="text-6xl font-extrabold my-4">132+</h2>
            <span>31 More Will Lunch</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

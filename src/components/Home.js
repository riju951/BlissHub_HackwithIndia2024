import React from "react";
import Landing from "../img/landing.jpg";
const Home = () => {
  return (
    <div className="flex justify-between items-center p-6">
      <div className="w-1/2 pr-8">
        <div className="text-blue ml-20 space-y-8">
          <div className="text-6xl mb-4 text-[#674FD7]">
            BlissHub: Your Ultimate Stressbuster
          </div>
          <p className="italic text-[#1D5E9A] text-2xl ">
            "Discover Your Digital Oasis for Mental and Emotional Harmony.
            Tailor Your Journey to Inner Peace with Personalization and
            Flexibility."
          </p>
        </div>
      </div>
      <div className="w-1/3 mr-20">
        <img src={Landing} alt="" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import Logo from "../logo/logo.jpg";
const Home = () => {
  return (
    <div className="flex justify-between items-center p-6">
      <div className="w-1/2 pr-8">
        <div className="text-blue p-6 py-10 mt-5">
          <h2 className="text-4xl mb-4">Unlock your inner calm</h2>
          <p className="italic">"Future of Workplace is here."</p>
        </div>
      </div>
      <div className="w-1/3">
        <img src={Logo} alt="" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Home;

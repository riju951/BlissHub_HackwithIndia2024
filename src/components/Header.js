import React from "react";
import Logo from "../logo/logo.jpg";
const Header = () => {
  return (
    <div className="bg-white py-4 px-6 flex justify-between items-center text-[#1D5E9A]">
      {/* Left side logo */}
      <div className="flex items-center w-[250px] ml-10">
        <img src={Logo} alt="Logo" className="" />
      </div>

      {/* Right side sections */}
      <div className="flex items-center space-x-14 mr-10">
        {/* Features */}
        <div className="relative">
          <div class="cursor-pointer text-a2d2ff hover:text-[#1EB8F5] hover:border-b-2 hover:border-[#1D5E9A]">
            Features
          </div>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-a2d2ff transition-all duration-300"></div>
        </div>

        {/* Benefits */}
        <div className="relative">
          <div className="cursor-pointer text-a2d2ff hover:text-[#1EB8F5] hover:border-b-2 hover:border-[#1D5E9A]">
            Benefits
          </div>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-a2d2ff transition-all duration-300"></div>
        </div>

        {/* Sign In */}
        <div className="relative">
          <div className="cursor-pointer text-a2d2ff hover:bg-[#1EB8F5] hover:text-[#1D5E9A] bg-[#1D5E9A] text-white px-4 py-2 rounded-lg font-semibold">
            Sign In
          </div>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-a2d2ff transition-all duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;

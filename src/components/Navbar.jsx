import React from "react";

function Navbar() {
  return (
    <div className="px-5 md:px-10 lg:px-20 xl:px-44  py-10 flex justify-between items-center relative overflow-hidden">
      <div className="flex items-center gap-10">
        <div className="logo">
          <a href="" className="">
            <img src="/images/logo.png" alt="" className="" />
          </a>
        </div>
        <div className="links capitalize font-semibold text-xl hidden lg:flex items-center gap-6 ">
          <a href="#" className="text-[#FF5555]">
            Home
          </a>
          <a href="#" className="">
            About us
          </a>
          <a href="#" className="">
            pricing
          </a>
          <a href="#" className="">
            features
          </a>
        </div>
      </div>
      <button className="uppercase bg-black text-white px-10 py-4 rounded">download</button>
    </div>
  );
}

export default Navbar;

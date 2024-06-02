import React from "react";
import Email from "./icons/Email"
import Phone from "./icons/Phone"

function Footer() {
  return (
    <div className="relative overflow-hidden mt-40 px-5 md:px-10 lg:px-20 xl:px-44 ">
      <div className="flex flex-wrap gap-16 items-start justify-between">
        <div className="flex flex-col gap-4 font-medium">
          <div className="logo">
            <a href="" className="">
              <img src="/images/logo.png" alt="" className="" />
            </a>
          </div>
          <a href="" className="capitalize flex items-center gap-3">
           <Email/> help@frybix.com
          </a>
          <a href="" className="capitalize flex items-center gap-3">
          <Phone/> +1 234 456 678 89
          </a>
        </div>
        <div className="flex flex-col gap-4 font-medium">
          <h3 className="capitalize text-3xl ">links</h3>
          <a href="" className="capitalize">
            home
          </a>
          <a href="" className="capitalize">
            about us
          </a>
          <a href="" className="capitalize">
            bookings
          </a>
          <a href="" className="capitalize">
            blog
          </a>
        </div>
        <div className="flex flex-col gap-4 font-medium">
          <h3 className="capitalize text-3xl ">legal</h3>
          <a href="" className="capitalize">
            terms of use
          </a>
          <a href="" className="capitalize">
            privacy policy
          </a>
          <a href="" className="capitalize">
            cookie policy
          </a>
        </div>
        <div className="flex flex-col gap-4 font-medium">
          <h3 className="capitalize text-3xl ">product</h3>
          <a href="" className="capitalize">
            take tour
          </a>
          <a href="" className="capitalize">
            live chat
          </a>
          <a href="" className="capitalize">
            reveiws
          </a>
        </div>
        <div className="flex flex-col gap-4 font-medium">
          <h3 className="capitalize text-3xl ">Newsletter</h3>
          <a href="" className="capitalize">
            Stay up to date
          </a>
          <div className="flex items-center gap-3">
            <input type="text" className="px-4 py-4 rounded border border-zinc-300 w-[50vw] md:w-fit" placeholder="Your email" />
            <button className="capitalize bg-black text-white px-6 md:px-10 py-4 rounded">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="fading-line mt-24 w-full"></div>
      <p className="text-center my-10 font-medium">Copyright 2022 uifry.com all rights reserved</p>
    </div>
  );
}

export default Footer;

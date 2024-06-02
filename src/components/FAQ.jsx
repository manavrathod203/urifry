import React from "react";

function FAQ() {
  return (
    <div className="px-5 md:px-10 lg:px-20 xl:px-44  mt-20 relative overflow-hidden">
      <p className="uppercase text-lg text-[#FF5555] font-medium">faq</p>
      <h2 className="capitalize text-5xl font-bold">
        Frequently asked <br /> questions
      </h2>
      {/* grid */}
      <div className="grid md:grid-cols-2 md:grid-rows-3 gap-5 mt-10">
        <div className="bg-[#FF5555] text-white p-7 rounded-md">
          <h4 className="capitalize text-3xl 3 font-semibold">
            the best financial accounting app ever!
          </h4>
          <p className="text-lg mt-3">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris.
          </p>
        </div>
        <div className="bg-white text-black p-7 rounded-md">
          <h4 className="capitalize text-3xl 3 font-semibold">
            the best financial accounting app ever!
          </h4>
          <p className="text-lg mt-3">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris.
          </p>
        </div>

        <div className="bg-white text-black p-7 rounded-md">
          <h4 className="capitalize text-3xl 3 font-semibold">
            the best financial accounting app ever!
          </h4>
          <p className="text-lg mt-3">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris.
          </p>
        </div>

        <div className="bg-[#FF5555] text-white p-7 rounded-md">
          <h4 className="capitalize text-3xl 3 font-semibold">
            the best financial accounting app ever!
          </h4>
          <p className="text-lg mt-3">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris.
          </p>
        </div>
        <div className="bg-[#FF5555] text-white p-7 rounded-md">
          <h4 className="capitalize text-3xl 3 font-semibold">
            the best financial accounting app ever!
          </h4>
          <p className="text-lg mt-3">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris.
          </p>
        </div>
        <div className="bg-white text-black p-7 rounded-md">
          <h4 className="capitalize text-3xl 3 font-semibold">
            the best financial accounting app ever!
          </h4>
          <p className="text-lg mt-3">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris.
          </p>
        </div>
      </div>

      {/* banner */}
      <div className="glare absolute -left-20 xl:left-0 translate-y-[70px] xl:translate-y-[-40px] z-[10] ">
        <img
          src="/images/red.png"
          alt=""
          className="relative w-[300px] xl:w-[500px] z-[2]"
        />
        <img
          src="/images/yellow.png"
          alt=""
          className="relative -top-[16.5rem] -left-6 w-[300px] xl:w-[500px] z-[1]"
        />
      </div>
      <img src="/images/banner.png" alt="" className=" mt-28 md:mt-40 w-full relative z-10" />
    </div>
  );
}

export default FAQ;

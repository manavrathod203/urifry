import React from "react";

function Testimonial() {
  return (
    <div className="px-5 md:px-10 lg:px-20 xl:px-44  mt-20 relative overflow-hidden">
      <p className="uppercase text-lg  font-medium text-center">testimonial</p>
      <h2 className="capitalize text-3xl md:text-5xl font-bold text-center mt-2">
        what our users <br /> say about us?
      </h2>
      <div className="flex flex-wrap items-center relative">
        <div className="w-full lg:w-1/2">
          <div className="relative ">
            <img src="/images/ellipse.png" alt="" className="relative z-[3]" />
            <img
              src="/images/red.png"
              alt=""
              className="absolute top-24 w-[600px] z-[1] "
            />
            <img src="/images/yellow.png" alt="" className="absolute top-48 z-[0]" />
            <img
              src="/images/people.png"
              alt=""
              className="absolute top-16 left-20 z-[4]"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col gap-6">
            <h4 className="capitalize text-3xl font-semibold">
              the best financial accounting <br /> app ever!
            </h4>
            <p className="text-lg font-medium opacity-65 lg:w-[80%]">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.”
            </p>
            <img src="/images/people-row.png" alt="" className="w-[25%]" />
            <p className="capitalize font-semibold text-lg">nick jonas</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

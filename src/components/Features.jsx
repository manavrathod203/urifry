import React from "react";
import SinglePhone from "./SinglePhone";
import Star from "./icons/Star";
import Cube from "./icons/Cube";
import Cube2 from "./icons/Cube2";
import Bell from "./icons/Bell";
import CircleStar from "./icons/CircleStar";
function Features() {
  return (
    <div className="relative flex flex-col px-5 md:px-10 lg:px-20 xl:px-44  mt-20 w-full overflow-hidden pb-32 ">
      {/* glare */}
      <div className="glare absolute -right-64 translate-y-32">
        <img
          src="/images/red.png"
          alt=""
          className="relative  w-[500px] z-[2]"
        />
        <img
          src="/images/yellow.png"
          alt=""
          className="relative -top-[16.5rem] -left-6 w-[500px] z-[1]"
        />
      </div>

      {/* main features */}
      <div className="flex flex-wrap items-center relative  lg:mt-10  ">
        <div className="w-full md:w-1/2">
          <SinglePhone />
        </div>
        <div className="w-full md:w-1/2">
          <p className="uppercase text-lg text-[#FF5555] font-medium">
            features
          </p>
          <h2 className="capitalize text-5xl font-bold">uifry premium</h2>
          <div className="flex flex-col gap-8 items-start mt-8">
            <div className="flex flex-col gap-3">
              <h4 className="capitalize text-lg flex items-center gap-2 font-semibold">
                <Star /> budgeting intervals
              </h4>
              <p className="text-lg font-medium opacity-65 xl:w-[85%]">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="capitalize text-lg flex items-center gap-3 font-semibold">
                <Cube /> budgeting intervals
              </h4>
              <p className="text-lg font-medium opacity-65 xl:w-[85%]">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>
            <div className="flex flex-wrap flex-col gap-3">
              <h4 className="capitalize text-lg flex items-center gap-2 font-semibold">
                <Cube2 /> budgeting intervals
              </h4>
              <p className="text-lg font-medium opacity-65 xl:w-[85%]">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center mt-20 lg:mt-10 ">
        <div className="w-full md:w-1/2">
          <p className="uppercase text-lg text-[#FF5555] font-medium">
            advatnages
          </p>
          <h2 className="capitalize text-5xl font-bold">why choose Uifry?</h2>
          <div className="flex flex-col gap-6 mt-8">
            <h4 className="capitalize text-3xl flex items-center gap-3 font-semibold">
              <Bell /> clever notifications
            </h4>
            <p className="text-lg font-medium opacity-65 xl:w-[85%]">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <SinglePhone />
        </div>
      </div>

      <div className="flex flex-wrap items-center mt-20 lg:mt-10 ">
        <div className="w-full md:w-1/2">
          <SinglePhone />
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-6 mt-8">
            <h4 className="capitalize text-3xl flex items-center gap-3 font-semibold">
              <CircleStar /> fully customizable
            </h4>
            <p className="text-lg font-medium opacity-65 xl:w-[85%]">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

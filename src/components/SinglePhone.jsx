import React from "react";

function SinglePhone() {
  return (
    <div className="relative ">
      <img src="/images/ellipse.png" alt="" className="relative z-[3]" />
      <img
        src="/images/red.png"
        alt=""
        className="absolute top-[3vw] w-[600px] z-[2]"
      />
      <img src="/images/yellow.png" alt="" className="absolute top-0 z-[0]" />
      <img
        src="/images/iPhone-13-Pro-1.png"
        alt=""
        className="absolute top-[0] lg:top-[1vw] left-[20%] xl:left-[8vw] z-[4] w-[80vw] lg:w-[25vw]"
      />
    </div>
  );
}

export default SinglePhone;

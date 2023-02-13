import React from "react";
import myPic from "../assets/images/cbag.png";

function MyFigure() {
  return (
    <div className="pr-44  flex items-end">
      <div className="bg-[#EDA751] w-96  h-96 lg:w-[600px] lg:h-[600px] rounded-full -right-20 absolute -z-10"></div>

      <figure>
        <img src={myPic} alt="Cbag" />
      </figure>
    </div>
  );
}

export default MyFigure;

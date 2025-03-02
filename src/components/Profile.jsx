import React from "react";
import { Link } from "react-router";

function Profile({ name, img, sales, number }) {
  return (
    <>
      <Link className="relative bg-bag__sec p-5 rounded-20 flex gap-5 items-center lg2:flex-col hover:scale-95 transition-all duration-300 ease-in-out cursor-pointer">
        <div className="img">
          <img
            src={img}
            alt=""
            className="block h-14.5 w-14.5 lg2:h-24.7 lg2:w-24.7"
          />
        </div>
        <div className="lg2:text-center">
          <h4 className="text-22 leading-140 font-semibold text-white mb-1.4">
            {name}
          </h4>
          <div className="flex gap-1.4  text-base leading-140">
            <span className="text-caption">Total Sales:</span>
            <span className="flex">
              <h3 className="text-white">{sales}</h3>
              <span className="text-white font-space__mono ml-2.5">ETH</span>
            </span>
          </div>
        </div>
        <div className="absolute top-[13px] left-3 px-2.5 py-1 bg-bag rounded-full lg2:top-4.8 lg2:left-5">
          <span className="text-base leading-140 text-caption">
            {number + 1}
          </span>
        </div>
      </Link>
    </>
  );
}

export default Profile;

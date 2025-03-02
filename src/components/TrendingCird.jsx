import React from "react";
import { Link } from "react-router";

function TrendingCird({ data }) {
  return (
    <>
      <Link className="trending__cird">
        <div className="mb-3.6">
          <img
            src={data.img1}
            alt="cird img"
            className="block h-[330px] w-full hover:scale-95 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="flex justify-between mb-3.6 h-fit">
          <div>
            <img
              src={data.img2}
              alt="cird img"
              className="block h-[95px] w-[95px] md2:h-[100px] md2:w-[100px] hover:scale-95 transition-all duration-300 ease-in-out"
            />
          </div>
          <div>
            <img
              src={data.img3}
              alt="cird img"
              className="block h-[95px] w-[95px] md2:h-[100px] md2:w-[100px] hover:scale-95 transition-all duration-300 ease-in-out"
            />
          </div>
          <div className="h-[95px] w-[95px] flex items-center justify-center bg-action rounded-20 md2:h-[100px] md2:w-[100px] hover:scale-95 transition-all duration-300 ease-in-out">
            <span className="text-base font-bold leading-140 text-white md2:text-22 md2:leading-160">
              {data.number}
            </span>
          </div>
        </div>
        <h4 className="text-22 leading-140 font-semibold text-white mb-2.5">
          {data.tittle}
        </h4>
        <div className="flex items-center gap-3">
          <div>
            <img src={data.avator} alt="cird img" className="block" />
          </div>
          <h5 className="text-base leading-140 text-white">{data.name}</h5>
        </div>
      </Link>
    </>
  );
}

export default TrendingCird;

import React from "react";

function RankingProfile({ data, number }) {
  return (
    <>
      <a href="" className="py-[13px] px-2.5 rounded-20 bg-bag__sec flex justify-between items-center md2:px-5 md2:py-3.5 lg2:py-3">
        <div className="flex items-center gap-2.5 h-6 md2:gap-5 md2:h-fit">
          <div className="px-2 lg2:px-2.5 lg2:py-1 lg2:rounded-full lg2:bg-bag">
            <span className="text-12 leading-110 text-caption font-space__mono md2:text-base md2:leading-140">
              {number + 1}
            </span>
          </div>
          <div className="flex items-center gap-3 lg2:gap-5 hover:scale-95 transition-all duration-300 ease-in-out">
            <img
              src={data.img}
              alt=""
              className="block h-6 w-6 lg2:h-14.5 lg2:w-14.5"
            />
            <h4 className="text-base leading-140 text-white md2:text-22 md2:font-semibold">
              {data.name}
            </h4>
          </div>
        </div>
        <div className="md2:flex md2:items-center md2:gap-5">
          <div className="hidden md2:block md2:w-24.5 md2:text-base md2:leading-140 font-space__mono text-[#00AC4F] lg2:w-[160px]">
            {data.change}
          </div>
          <div className="hidden lg2:block lg2:w-[160px] lg2:text-base lg2:leading-140 text-white font-space__mono">
            {data.sold}
          </div>
          <div className="w-20 flex gap-2 text-12 leading-110 font-space__mono text-white md2:w-24.5 md2:text-base md2:leading-140 lg2:w-[160px]">
            <span>{data.value}</span>
            <span>ETH</span>
          </div>
        </div>
      </a>
    </>
  );
}

export default RankingProfile;

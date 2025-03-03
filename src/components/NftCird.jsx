import React from "react";
import { Link } from "react-router";

function NftCird({ data, bg }) {
  return (
    <>
      <Link className="rounded-20 overflow-hidden hover:scale-95 transition-all duration-300 ease-in-out">
        <div>
          <img
            src={data.baner}
            alt=""
            className="block w-full h-[238px] md2:h-[295px]"
          />
        </div>
        <div className="p-5 pb-6.5" style={{ backgroundColor: bg }}>
          <div className="mb-6.5">
            <h4 className="text-22 leading-140 font-semibold text-white mb-1.4">
              {data.tittle}
            </h4>
            <div className="flex items-center gap-3">
              <img src={data.profile} alt="" className="block h-6 w-6" />
              <span className="text-base leading-140 text-white font-space__mono">
                {data.name}
              </span>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div>
              <span className="text-12 leading-110 text-caption mb-2 font-space__mono">
                Price
              </span>
              <div className="text-12 leading-110 text-white font-space__mono md2:text-base md2:leading-140">
                <span>{data.price}</span>
                <span className="ml-2">ETH</span>
              </div>
            </div>
            <div>
              <span className="text-12 leading-110 text-caption mb-2 font-space__mono">
                Highest Bid
              </span>
              <div className="text-12 leading-110 text-white font-space__mono md2:text-base md2:leading-140">
                <span>{data.bid}</span>
                <span className="ml-2">wETH</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default NftCird;

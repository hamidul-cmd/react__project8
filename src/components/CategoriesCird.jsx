import React from "react";
import { Link } from "react-router";

function CategoriesCird({ img, svg, tittle }) {
  return (
    <>
      <Link className="rounded-20 overflow-hidden hover:scale-95 transition-all duration-300 ease-in-out cursor-pointer">
        <div className="relative">
          <img src={img} alt="" className="w-full h-[142px] lg2:h-[240px]" />
          <div className="categori__curdsvg__box absolute top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-[15px]">
            <img src={svg} alt="" className="h-20 w-20 lg2:h-24.5 lg2:w-24.5" />
          </div>
        </div>
        <div className="p-5 pb-6.5 bg-bag__sec rounded-b-20 lg2:px-7.5 lg2:pt-5 lg2:pb-6.5">
          <h4 className="text-base leading-140 font-semibold text-white lg2:text-22">
            {tittle}
          </h4>
        </div>
      </Link>
    </>
  );
}

export default CategoriesCird;

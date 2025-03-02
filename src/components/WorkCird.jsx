import React from "react";

function WorkCird({ data }) {
  return (
    <>
      <div className="flex items-center gap-5 p-5 rounded-20 bg-bag__sec md2:flex-col md2:px-5 md2:pb-7.5 md2:pt-2.5 lg2:px-7.5">
        <div>
          <img
            src={data.img}
            alt=""
            className="h-24.5 w-24.5 md2:h-[160px] md2:w-[160px] block lg2:h-[250px] lg2:w-[250px]"
          />
        </div>
        <div className="w-[155px] md2:text-center md:w-full">
          <h4 className="text-base font-semibold leading-140 text-white mb-2.5 lg2:text-22">
            {data.tittle}
          </h4>
          <p className="text-12 leading-140 font-work__sans text-white lg2:text-base">
            {data.pera}
          </p>
        </div>
      </div>
    </>
  );
}

export default WorkCird;

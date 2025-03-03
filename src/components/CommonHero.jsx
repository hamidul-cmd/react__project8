import React from "react";

function CommonHero() {
  return (
    <>
      <section className="hero px-7.5 py-10 md2:px-20 md2:py-14.5 lg2:px-24.6 lg2:py-20 max-w-wrapper m-auto">
        <div className="mb-7.5">
          <h1 className="text-28 leading-140 text-white font-semibold mb-2.5 md2:text-38 md2:leading-120 lg2:text-51 lg2:leading-110">Browse Marketplace</h1>
          <p className="text-base leading-140 text-white lg2:text-22 lg2:leading-160">Browse through more than 50k NFTs on the NFT Marketplace.</p>
        </div>
        <div className="py-4.8 px-5 rounded-20 border border-bag__sec flex justify-between items-center">
          <input type="text" placeholder="Search your favourite NFTs" className="w-full border-none outline-none placeholder:text-base placeholder:leading-140 placeholder:text-caption text-base leading-140 text-caption" />
          <button className="cursor-pointer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.875 3.75C6.93997 3.75 3.75 6.93997 3.75 10.875C3.75 14.81 6.93997 18 10.875 18C14.81 18 18 14.81 18 10.875C18 6.93997 14.81 3.75 10.875 3.75ZM2.25 10.875C2.25 6.11154 6.11154 2.25 10.875 2.25C15.6385 2.25 19.5 6.11154 19.5 10.875C19.5 15.6385 15.6385 19.5 10.875 19.5C6.11154 19.5 2.25 15.6385 2.25 10.875Z"
                fill="white"
              />
              <path
                d="M15.913 15.913C16.2059 15.6201 16.6808 15.6201 16.9737 15.913L21.5299 20.4693C21.8228 20.7622 21.8228 21.237 21.5299 21.5299C21.237 21.8228 20.7622 21.8228 20.4693 21.5299L15.913 16.9737C15.6201 16.6808 15.6201 16.2059 15.913 15.913Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}

export default CommonHero;

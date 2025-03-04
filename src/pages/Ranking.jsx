import React, { useState } from "react";
import CommonHero from "../components/CommonHero";
import RankingProfile from "../components/RankingProfile";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";

function Ranking() {
  const [timechange, settimechange] = useState("today");
  const today = [
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
  ];
  const week = [
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },

    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },

    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },

    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },

    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },

    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },

    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },

    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
  ];
  const month = [
    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
  ];
  const all = [
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Jaydon Ekstrom Bothman",
      img: user1,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Ruben Carder",
      img: user2,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
    {
      name: "Alfredo Septimus",
      img: user3,
      change: "+1.41%",
      sold: "602",
      value: "12.4",
    },
  ];
  return (
    <>
      <CommonHero
        tittle="Top Creators"
        pera="Check out top ranking NFT artists on the NFT Marketplace."
      />
      <section className="max-w-wrapper m-auto px-7.5 md2:px-20 lg2:px-24.6">
        <div className="flex w-full">
          <button
            onClick={() => settimechange("today")}
            className={`grow py-5 text-base leading-140 font-semibold text-caption font-work__sans lg2:text-22 relative transition-all duration-300 ease-in-out cursor-pointer ${
              timechange === "today" &&
              "text-white after:content-[''] after:absolute after:h-[2px] after:w-full after:bg-caption after:left-0 after:bottom-0"
            }`}
          >
            <span className="hidden md2:block">Today</span>
            <span className="md2:hidden">1d</span>
          </button>
          <button
            onClick={() => settimechange("week")}
            className={`grow py-5 text-base leading-140 font-semibold text-caption font-work__sans lg2:text-22 relative transition-all duration-300 ease-in-out cursor-pointer ${
              timechange === "week" &&
              "text-white after:content-[''] after:absolute after:h-[2px] after:w-full after:bg-caption after:left-0 after:bottom-0"
            }`}
          >
            <span className="hidden md2:block">This Week</span>
            <span className="md2:hidden">7d</span>
          </button>
          <button
            onClick={() => settimechange("month")}
            className={`grow py-5 text-base leading-140 font-semibold text-caption font-work__sans lg2:text-22 relative transition-all duration-300 ease-in-out cursor-pointer ${
              timechange === "month" &&
              "text-white after:content-[''] after:absolute after:h-[2px] after:w-full after:bg-caption after:left-0 after:bottom-0"
            }`}
          >
            <span className="hidden md2:block">This Month</span>
            <span className="md2:hidden">30d</span>
          </button>
          <button
            onClick={() => settimechange("all")}
            className={`grow py-5 text-base leading-140 font-semibold text-caption font-work__sans lg2:text-22 relative transition-all duration-300 ease-in-out cursor-pointer ${
              timechange === "all" &&
              "text-white after:content-[''] after:absolute after:h-[2px] after:w-full after:bg-caption after:left-0 after:bottom-0"
            }`}
          >
            All Time
          </button>
        </div>
      </section>
      <section className="max-w-wrapper m-auto px-7.5 md2:px-20 lg2:px-24.6 py-10 mb-5">
        <div className="py-3 px-5 border border-bag__sec rounded-20 flex justify-between items-center font-space__mono mb-5">
          <div className="flex items-center gap-2.5 md2:gap-5">
            <span className="text-base leading-140 text-caption md2:text-base md2:leading-140">
              #
            </span>
            <span className="text-12 leading-110 text-caption md2:text-base md2:leading-140">
              Artist
            </span>
          </div>
          <div className=" md2:flex md2:items-center md2:gap-5">
            <span className="hidden md2:block w-24.5 text-caption md2:text-base md2:leading-140 lg2:w-[160px]">
              Change
            </span>
            <span className="hidden lg2:block lg2:w-[160px] text-caption lg2:text-base lg2:leading-140">
              NFTs Sold
            </span>
            <span className="w-[90px] md2:w-24.5 block text-12 leading-110 text-caption md2:text-base md2:leading-140 lg2:w-[160px]">
              Volume
            </span>
          </div>
        </div>
        <div className="space-y-5">
          {timechange === "today" &&
            today.map((data, i) => {
              return <RankingProfile key={i} data={data} number={i} />;
            })}
          {timechange === "week" &&
            week.map((data, i) => {
              return <RankingProfile key={i} data={data} number={i} />;
            })}
          {timechange === "month" &&
            month.map((data, i) => {
              return <RankingProfile key={i} data={data} number={i} />;
            })}
          {timechange === "all" &&
            all.map((data, i) => {
              return <RankingProfile key={i} data={data} number={i} />;
            })}
        </div>
      </section>
    </>
  );
}

export default Ranking;

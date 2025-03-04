import React, { useState } from "react";
import CommonHero from "../components/CommonHero";
import { NavLink } from "react-router";
import nftbaner1 from "../assets/nftbaner1.png";
import nftbaner2 from "../assets/nftbaner2.png";
import nftbaner3 from "../assets/nftbaner3.png";
import nftprofile1 from "../assets/nftprofile1.png";
import nftprofile2 from "../assets/nftprofile2.png";
import nftprofile3 from "../assets/nftprofile3.png";
import NftCird from "../components/NftCird";

function Marketplase() {
  const [grid, setgrid] = useState("nfts");
  const nft = [
    {
      baner: nftbaner1,
      profile: nftprofile1,
      tittle: "Distant Galaxy",
      name: "MoonDancer",
      price: "1.63",
      bid: "0.33",
    },
    {
      baner: nftbaner2,
      profile: nftprofile2,
      tittle: "Life On Edena",
      name: "NebulaKid",
      price: "1.53",
      bid: "0.67",
    },
    {
      baner: nftbaner3,
      profile: nftprofile3,
      tittle: "AstroFiction",
      name: "Spaceone",
      price: "1.87",
      bid: "0.32",
    },
    {
      baner: nftbaner1,
      profile: nftprofile1,
      tittle: "Distant Galaxy",
      name: "MoonDancer",
      price: "1.63",
      bid: "0.33",
    },
    {
      baner: nftbaner2,
      profile: nftprofile2,
      tittle: "Life On Edena",
      name: "NebulaKid",
      price: "1.53",
      bid: "0.67",
    },
    {
      baner: nftbaner3,
      profile: nftprofile3,
      tittle: "AstroFiction",
      name: "Spaceone",
      price: "1.87",
      bid: "0.32",
    },
    {
      baner: nftbaner1,
      profile: nftprofile1,
      tittle: "Distant Galaxy",
      name: "MoonDancer",
      price: "1.63",
      bid: "0.33",
    },
    {
      baner: nftbaner2,
      profile: nftprofile2,
      tittle: "Life On Edena",
      name: "NebulaKid",
      price: "1.53",
      bid: "0.67",
    },
    {
      baner: nftbaner3,
      profile: nftprofile3,
      tittle: "AstroFiction",
      name: "Spaceone",
      price: "1.87",
      bid: "0.32",
    },
    {
      baner: nftbaner1,
      profile: nftprofile1,
      tittle: "Distant Galaxy",
      name: "MoonDancer",
      price: "1.63",
      bid: "0.33",
    },
    {
      baner: nftbaner2,
      profile: nftprofile2,
      tittle: "Life On Edena",
      name: "NebulaKid",
      price: "1.53",
      bid: "0.67",
    },
    {
      baner: nftbaner3,
      profile: nftprofile3,
      tittle: "AstroFiction",
      name: "Spaceone",
      price: "1.87",
      bid: "0.32",
    },
  ];
  const collections = [
    {
      baner: nftbaner3,
      profile: nftprofile3,
      tittle: "AstroFiction",
      name: "Spaceone",
      price: "1.87",
      bid: "0.32",
    },
    {
      baner: nftbaner2,
      profile: nftprofile2,
      tittle: "Life On Edena",
      name: "NebulaKid",
      price: "1.53",
      bid: "0.67",
    },

    {
      baner: nftbaner1,
      profile: nftprofile1,
      tittle: "Distant Galaxy",
      name: "MoonDancer",
      price: "1.63",
      bid: "0.33",
    },
    {
      baner: nftbaner3,
      profile: nftprofile3,
      tittle: "AstroFiction",
      name: "Spaceone",
      price: "1.87",
      bid: "0.32",
    },
    {
      baner: nftbaner2,
      profile: nftprofile2,
      tittle: "Life On Edena",
      name: "NebulaKid",
      price: "1.53",
      bid: "0.67",
    },

    {
      baner: nftbaner1,
      profile: nftprofile1,
      tittle: "Distant Galaxy",
      name: "MoonDancer",
      price: "1.63",
      bid: "0.33",
    },
    {
      baner: nftbaner3,
      profile: nftprofile3,
      tittle: "AstroFiction",
      name: "Spaceone",
      price: "1.87",
      bid: "0.32",
    },
    {
      baner: nftbaner2,
      profile: nftprofile2,
      tittle: "Life On Edena",
      name: "NebulaKid",
      price: "1.53",
      bid: "0.67",
    },

    {
      baner: nftbaner1,
      profile: nftprofile1,
      tittle: "Distant Galaxy",
      name: "MoonDancer",
      price: "1.63",
      bid: "0.33",
    },
    {
      baner: nftbaner3,
      profile: nftprofile3,
      tittle: "AstroFiction",
      name: "Spaceone",
      price: "1.87",
      bid: "0.32",
    },
    {
      baner: nftbaner2,
      profile: nftprofile2,
      tittle: "Life On Edena",
      name: "NebulaKid",
      price: "1.53",
      bid: "0.67",
    },

    {
      baner: nftbaner1,
      profile: nftprofile1,
      tittle: "Distant Galaxy",
      name: "MoonDancer",
      price: "1.63",
      bid: "0.33",
    },
    {
      baner: nftbaner3,
      profile: nftprofile3,
      tittle: "AstroFiction",
      name: "Spaceone",
      price: "1.87",
      bid: "0.32",
    },
    {
      baner: nftbaner2,
      profile: nftprofile2,
      tittle: "Life On Edena",
      name: "NebulaKid",
      price: "1.53",
      bid: "0.67",
    },

    {
      baner: nftbaner1,
      profile: nftprofile1,
      tittle: "Distant Galaxy",
      name: "MoonDancer",
      price: "1.63",
      bid: "0.33",
    },
  ];
  return (
    <>
      <CommonHero
        tittle="Browse Marketplace"
        pera="Browse through more than 50k NFTs on the NFT Marketplace."
        search="Search your favourite NFTs"
      />
      <section className="border-t border-bag__sec">
        <div className="px-7.5 pt-2.5 flex md2:px-20 lg2:px-24.6 max-w-wrapper m-auto">
          <NavLink
            onClick={() => setgrid("nfts")}
            className={`grow flex justify-center items-center pb-5 relative ${
              grid === "nfts" &&
              " after:content-[''] after:absolute after:h-[2px] after:w-full after:bg-caption after:left-0 after:bottom-0"
            }`}
          >
            <span
              className={`text-base leading-140 font-work__sans text-caption font-semibold transition-all duration-300 ease-in-out lg2:text-22 ${
                grid === "nfts" && "text-white"
              }`}
            >
              NFTs
            </span>
            <div
              className={`hidden md2:block ml-4 text-base leading-140 font-space__mono text-white py-1.4 px-2.5 rounded-full bg-bag__sec transition-all duration-300 ease-in-out ${
                grid === "nfts" && "bg-caption"
              }`}
            >
              {nft.length}
            </div>
          </NavLink>
          <NavLink
            onClick={() => setgrid("collections")}
            className={`grow flex justify-center items-center pb-5 relative ${
              grid === "collections" &&
              " after:content-[''] after:absolute after:h-[2px] after:w-full after:bg-caption after:left-0 after:bottom-0"
            }`}
          >
            <span
              className={`text-base leading-140 font-work__sans text-caption font-semibold transition-all duration-300 ease-in-out lg2:text-22 ${
                grid === "collections" && "text-white"
              }`}
            >
              Collections
            </span>
            <div
              className={`hidden md2:block ml-4 text-base leading-140 font-space__mono text-white py-1.4 px-2.5 rounded-full bg-bag__sec transition-all duration-300 ease-in-out ${
                grid === "collections" && "bg-caption"
              }`}
            >
              {collections.length}
            </div>
          </NavLink>
        </div>
        <section className="bg-bag__sec border-b-4 border-b-bag">
          <div className="grid grid-cols-1 md2:grid-cols-2 lg2:grid-cols-3 gap-7.5 px-7.5 py-10 md2:px-20 md2:py-14.5 lg2:px-24.6 max-w-wrapper m-auto">
            {grid === "nfts" &&
              nft.map((data, i) => {
                return <NftCird key={i} data={data} bg="#2b2b2b" />;
              })}
            {grid === "collections" &&
              collections.map((data, i) => {
                return <NftCird key={i} data={data} bg="#2b2b2b" />;
              })}
          </div>
        </section>
      </section>
    </>
  );
}

export default Marketplase;

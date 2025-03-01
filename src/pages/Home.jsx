import React from "react";
import heroimg from "../assets/heroimg.gif";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router";
import Commontittle from "../components/Commontittle";
import TrendingCird from "../components/TrendingCird";
import dog1 from "../assets/dog1.png";
import dog2 from "../assets/dog2.png";
import dog3 from "../assets/dog3.png";
import flower1 from "../assets/flower1.png";
import flower2 from "../assets/flower2.png";
import flower3 from "../assets/flower3.png";
import robot1 from "../assets/robot1.png";
import robot2 from "../assets/robot2.png";
import robot3 from "../assets/robot3.png";
import dogavator from "../assets/dogavator.png";
import floweravator from "../assets/floweravator.png";
import robotavator from "../assets/robotavator.png";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import Profile from "../components/Profile";
import cate1 from "../assets/cate1.png";
import cate2 from "../assets/cate2.png";
import cate3 from "../assets/cate3.png";
import cate4 from "../assets/cate4.png";
import cate5 from "../assets/cate5.png";
import cate6 from "../assets/cate6.png";
import cate7 from "../assets/cate7.png";
import cate8 from "../assets/cate8.png";
import catesvg1 from "../assets/cate1.svg";
import catesvg2 from "../assets/cate2.svg";
import catesvg3 from "../assets/cate3.svg";
import catesvg4 from "../assets/cate4.svg";
import catesvg5 from "../assets/cate5.svg";
import catesvg6 from "../assets/cate6.svg";
import catesvg7 from "../assets/cate7.svg";
import catesvg8 from "../assets/cate8.svg";
import CategoriesCird from "../components/CategoriesCird";

function Home() {
  const dog = {
    img1: dog1,
    img2: dog2,
    img3: dog3,
    number: "1025+",
    avator: dogavator,
    tittle: "DSGN Animals",
    name: "MrFox",
  };
  const robot = {
    img1: robot1,
    img2: robot2,
    img3: robot3,
    number: "1025+",
    avator: robotavator,
    tittle: "Disco Machines",
    name: "BeKind2Robots",
  };
  const flower = {
    img1: flower1,
    img2: flower2,
    img3: flower3,
    number: "6+",
    avator: floweravator,
    tittle: "Magic Mushrooms",
    name: "Shroomie",
  };
  const profile = [
    {
      img: user1,
      name: "Keepitreal",
      sales: "34.53",
    },
    {
      img: user2,
      name: "DigiLab",
      sales: "34.53",
    },
    {
      img: user3,
      name: "GravityOne",
      sales: "34.53",
    },
    {
      img: user1,
      name: "Juanie",
      sales: "34.53",
    },
    {
      img: user2,
      name: "BlueWhale",
      sales: "34.53",
    },
    {
      img: user3,
      name: "mr fox",
      sales: "34.53",
    },
    {
      img: user1,
      name: "Shroomie",
      sales: "34.53",
    },
    {
      img: user2,
      name: "robotica",
      sales: "34.53",
    },
    {
      img: user3,
      name: "RustyRobot",
      sales: "34.53",
    },
    {
      img: user1,
      name: "animakid",
      sales: "34.53",
    },
    {
      img: user2,
      name: "Dotgu",
      sales: "34.53",
    },
    {
      img: user3,
      name: "Ghiblier",
      sales: "34.53",
    },
  ];
  const categories = [
    {
      img: cate1,
      svg: catesvg1,
      tittle: "Art",
    },
    {
      img: cate2,
      svg: catesvg2,
      tittle: "Collectibles",
    },
    {
      img: cate3,
      svg: catesvg3,
      tittle: "Music",
    },
    {
      img: cate4,
      svg: catesvg4,
      tittle: "Photography",
    },
    {
      img: cate5,
      svg: catesvg5,
      tittle: "Video",
    },
    {
      img: cate6,
      svg: catesvg6,
      tittle: "Utility",
    },
    {
      img: cate7,
      svg: catesvg7,
      tittle: "Sport",
    },
    {
      img: cate8,
      svg: catesvg8,
      tittle: "Virtual",
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero__text h1, .hero__text p,.primare_btn__box, .hero__flex", {
      x: -200,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      stagger: 0.3,
    });
  });
  return (
    <>
      <section className="hero px-7.5 py-10 md2:px-16.6 lg2:px-24.6 md2:flex md2:gap-7.5 justify-center md2:py-20">
        <div className="md2:w-[330px] lg2:w-[510px] hero__text">
          <div className="font-work__sans mb-10">
            <h1 className="text-28 leading-140 font-semibold text-white mb-2.5 md2:text-38 md2:leading-120 md2:mb-5 lg2:text-67 lg2:leading-110">
              Discover digital art & Collect NFTs
            </h1>
            <p className="text-base leading-140 text-white lg2:text-22 lg2:leading-160 lg2:mb-7.5">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>
          </div>
          <div className="hidden md2:block">
            <div className="primare_btn__box">
              <Link className="primare_btn w-fit bg-action mb-5 lg2:mb-7.5 hover:scale-95 transition-all duration-300 ease-in-out">
                <div>
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.67053 12.4494C6.78055 12.7766 6.60451 13.131 6.27734 13.241C5.21792 13.5973 4.65489 14.4866 4.35373 15.391C4.23414 15.7501 4.16189 16.0958 4.11848 16.3817C4.40434 16.3383 4.75006 16.266 5.10917 16.1464C6.01355 15.8453 6.9029 15.2823 7.25916 14.2228C7.36918 13.8957 7.7236 13.7196 8.05078 13.8296C8.37795 13.9397 8.55399 14.2941 8.44396 14.6213C7.9096 16.2103 6.58801 16.9715 5.50411 17.3324C4.95655 17.5148 4.44395 17.6048 4.0698 17.6497C3.88182 17.6722 3.72641 17.6836 3.616 17.6894C3.56074 17.6924 3.51658 17.6939 3.48505 17.6946C3.46928 17.695 3.45666 17.6952 3.44737 17.6954L3.43596 17.6955L3.43217 17.6955L3.43077 17.6955L3.43019 17.6955C3.42993 17.6955 3.42969 17.6955 3.42969 17.0705C2.80469 17.0705 2.80469 17.0702 2.80469 17.07L2.80469 17.0694L2.80469 17.068L2.80471 17.0642L2.80481 17.0528C2.80493 17.0435 2.80514 17.0309 2.80553 17.0151C2.80631 16.9836 2.80782 16.9394 2.81072 16.8842C2.81653 16.7738 2.82797 16.6184 2.85052 16.4304C2.8954 16.0562 2.98542 15.5436 3.16776 14.9961C3.5287 13.9122 4.28989 12.5906 5.87891 12.0562C6.20608 11.9462 6.5605 12.1222 6.67053 12.4494ZM3.42969 17.0705H2.80469C2.80469 17.4157 3.08451 17.6955 3.42969 17.6955V17.0705Z"
                      fill="white"
                    />
                    <path
                      d="M17.0462 3.45406C16.3208 3.34943 14.5351 3.31002 12.7076 5.13753L7.84482 10.0003L10.5 12.6555L15.3627 7.79271C17.1903 5.9652 17.1508 4.17951 17.0462 3.45406ZM17.2275 2.21727C16.2298 2.07282 14.0058 2.07157 11.8237 4.25365L6.519 9.55834C6.40179 9.67555 6.33594 9.83452 6.33594 10.0003C6.33594 10.166 6.40179 10.325 6.519 10.4422L10.0581 13.9813C10.3021 14.2254 10.6979 14.2254 10.9419 13.9813L16.2466 8.67659C18.4287 6.49452 18.4275 4.27052 18.283 3.27282C18.2465 3.0058 18.1235 2.75803 17.9329 2.5674C17.7422 2.37678 17.4945 2.25382 17.2275 2.21727Z"
                      fill="white"
                    />
                    <path
                      d="M14.922 8.49219C15.2672 8.49219 15.547 8.77201 15.547 9.11719V14.1641L15.5469 14.173C15.5423 14.5013 15.4086 14.8145 15.175 15.045L12.6527 17.575C12.4926 17.7349 12.2921 17.8484 12.0725 17.9033C11.853 17.9582 11.6227 17.9524 11.4061 17.8867C11.1896 17.8209 10.995 17.6976 10.843 17.5299C10.6912 17.3623 10.5877 17.1567 10.5435 16.9349C10.5434 16.9347 10.5435 16.9351 10.5435 16.9349L9.88731 13.6619C9.81946 13.3235 10.0388 12.9941 10.3773 12.9263C10.7157 12.8584 11.0451 13.0778 11.1129 13.4162L11.7694 16.6906L14.297 14.1552V9.11719C14.297 8.77201 14.5768 8.49219 14.922 8.49219Z"
                      fill="white"
                    />
                    <path
                      d="M6.32625 4.95319L6.33515 4.95312H11.382C11.7272 4.95312 12.007 5.23295 12.007 5.57812C12.007 5.9233 11.7272 6.20312 11.382 6.20312H6.34399L6.33894 6.20828L6.33891 6.20825L3.80859 8.73075L3.80956 8.73094L7.083 9.38719C7.42144 9.45504 7.6408 9.78441 7.57295 10.1229C7.5051 10.4613 7.17574 10.6807 6.83729 10.6128L3.56483 9.95675C3.56464 9.95671 3.56445 9.95668 3.56426 9.95664C3.34252 9.91244 3.1369 9.80892 2.96933 9.65711C2.80162 9.50516 2.6783 9.31054 2.61254 9.094C2.54677 8.87746 2.54103 8.64712 2.59592 8.42757C2.65081 8.20802 2.76427 8.00749 2.9242 7.84738L2.92514 7.84644L2.92514 7.84644L5.45424 5.32514C5.68475 5.09151 5.99796 4.95786 6.32625 4.95319Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span className="text-base leading-140 text-white font-semibold  font-work__sans lg2:text-base">
                  Get Started
                </span>
              </Link>
            </div>
            <div className="flex justify-between hero__flex">
              <div>
                <h3 className="text-22 font-black text-white leading-160 font-space__mono lg2:text-28 lg2:leading-140">
                  240k+
                </h3>
                <h5 className="text-base leading-140 text-white font-work__sans lg2:text-22 lg2:leading-160">
                  Total Sale
                </h5>
              </div>
              <div>
                <h3 className="text-22 font-black text-white leading-160 font-space__mono lg2:text-28 lg2:leading-140">
                  100k+
                </h3>
                <h5 className="text-base leading-140 text-white font-work__sans lg2:text-22 lg2:leading-160">
                  Auctions
                </h5>
              </div>
              <div>
                <h3 className="text-22 font-black text-white leading-160 font-space__mono lg2:text-28 lg2:leading-140">
                  240k+
                </h3>
                <h5 className="text-base leading-140 text-white font-work__sans lg2:text-22 lg2:leading-160">
                  Artists
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-10">
            <img
              src={heroimg}
              alt=""
              className="block md2:w-[330px] md2:h-[330px] lg2:w-[510px] lg2:h-[510px]"
            />
          </div>
          <div className="md2:hidden">
            <Link className="primare_btn bg-action mb-10 w-full">
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.67053 12.4494C6.78055 12.7766 6.60451 13.131 6.27734 13.241C5.21792 13.5973 4.65489 14.4866 4.35373 15.391C4.23414 15.7501 4.16189 16.0958 4.11848 16.3817C4.40434 16.3383 4.75006 16.266 5.10917 16.1464C6.01355 15.8453 6.9029 15.2823 7.25916 14.2228C7.36918 13.8957 7.7236 13.7196 8.05078 13.8296C8.37795 13.9397 8.55399 14.2941 8.44396 14.6213C7.9096 16.2103 6.58801 16.9715 5.50411 17.3324C4.95655 17.5148 4.44395 17.6048 4.0698 17.6497C3.88182 17.6722 3.72641 17.6836 3.616 17.6894C3.56074 17.6924 3.51658 17.6939 3.48505 17.6946C3.46928 17.695 3.45666 17.6952 3.44737 17.6954L3.43596 17.6955L3.43217 17.6955L3.43077 17.6955L3.43019 17.6955C3.42993 17.6955 3.42969 17.6955 3.42969 17.0705C2.80469 17.0705 2.80469 17.0702 2.80469 17.07L2.80469 17.0694L2.80469 17.068L2.80471 17.0642L2.80481 17.0528C2.80493 17.0435 2.80514 17.0309 2.80553 17.0151C2.80631 16.9836 2.80782 16.9394 2.81072 16.8842C2.81653 16.7738 2.82797 16.6184 2.85052 16.4304C2.8954 16.0562 2.98542 15.5436 3.16776 14.9961C3.5287 13.9122 4.28989 12.5906 5.87891 12.0562C6.20608 11.9462 6.5605 12.1222 6.67053 12.4494ZM3.42969 17.0705H2.80469C2.80469 17.4157 3.08451 17.6955 3.42969 17.6955V17.0705Z"
                    fill="white"
                  />
                  <path
                    d="M17.0462 3.45406C16.3208 3.34943 14.5351 3.31002 12.7076 5.13753L7.84482 10.0003L10.5 12.6555L15.3627 7.79271C17.1903 5.9652 17.1508 4.17951 17.0462 3.45406ZM17.2275 2.21727C16.2298 2.07282 14.0058 2.07157 11.8237 4.25365L6.519 9.55834C6.40179 9.67555 6.33594 9.83452 6.33594 10.0003C6.33594 10.166 6.40179 10.325 6.519 10.4422L10.0581 13.9813C10.3021 14.2254 10.6979 14.2254 10.9419 13.9813L16.2466 8.67659C18.4287 6.49452 18.4275 4.27052 18.283 3.27282C18.2465 3.0058 18.1235 2.75803 17.9329 2.5674C17.7422 2.37678 17.4945 2.25382 17.2275 2.21727Z"
                    fill="white"
                  />
                  <path
                    d="M14.922 8.49219C15.2672 8.49219 15.547 8.77201 15.547 9.11719V14.1641L15.5469 14.173C15.5423 14.5013 15.4086 14.8145 15.175 15.045L12.6527 17.575C12.4926 17.7349 12.2921 17.8484 12.0725 17.9033C11.853 17.9582 11.6227 17.9524 11.4061 17.8867C11.1896 17.8209 10.995 17.6976 10.843 17.5299C10.6912 17.3623 10.5877 17.1567 10.5435 16.9349C10.5434 16.9347 10.5435 16.9351 10.5435 16.9349L9.88731 13.6619C9.81946 13.3235 10.0388 12.9941 10.3773 12.9263C10.7157 12.8584 11.0451 13.0778 11.1129 13.4162L11.7694 16.6906L14.297 14.1552V9.11719C14.297 8.77201 14.5768 8.49219 14.922 8.49219Z"
                    fill="white"
                  />
                  <path
                    d="M6.32625 4.95319L6.33515 4.95312H11.382C11.7272 4.95312 12.007 5.23295 12.007 5.57812C12.007 5.9233 11.7272 6.20312 11.382 6.20312H6.34399L6.33894 6.20828L6.33891 6.20825L3.80859 8.73075L3.80956 8.73094L7.083 9.38719C7.42144 9.45504 7.6408 9.78441 7.57295 10.1229C7.5051 10.4613 7.17574 10.6807 6.83729 10.6128L3.56483 9.95675C3.56464 9.95671 3.56445 9.95668 3.56426 9.95664C3.34252 9.91244 3.1369 9.80892 2.96933 9.65711C2.80162 9.50516 2.6783 9.31054 2.61254 9.094C2.54677 8.87746 2.54103 8.64712 2.59592 8.42757C2.65081 8.20802 2.76427 8.00749 2.9242 7.84738L2.92514 7.84644L2.92514 7.84644L5.45424 5.32514C5.68475 5.09151 5.99796 4.95786 6.32625 4.95319Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="text-white text-base leading-140 font-semibold font-work__sans">
                Get Started
              </span>
            </Link>
            <div className="flex justify-between">
              <div>
                <h3 className="text-22 font-bold leading-160 font-space__mono text-white">
                  240k+
                </h3>
                <h5 className="text-base leading-140 text-white font-work__sans">
                  Total Sale
                </h5>
              </div>
              <div>
                <h3 className="text-22 font-bold leading-160 font-space__mono text-white">
                  240k+
                </h3>
                <h5 className="text-base leading-140 text-white font-work__sans">
                  Total Sale
                </h5>
              </div>
              <div>
                <h3 className="text-22 font-bold leading-160 font-space__mono text-white">
                  240k+
                </h3>
                <h5 className="text-base leading-140 text-white font-work__sans">
                  Total Sale
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-7.5 py-10 md2:px-16.6 lg2:px-24.6 lg2:py-20">
        <div className="mb-10 lg2:mb-14.5">
          <Commontittle
            tittle=" Trending Collection"
            pera=" Checkout our weekly updated trending collection."
          />
        </div>
        <div className="md2:flex md2:gap-7.5">
          <TrendingCird data={dog} />
          {window.outerWidth > 830 && <TrendingCird data={flower} />}
          {window.outerWidth > 1279 && <TrendingCird data={robot} />}
        </div>
      </section>
      <section className="px-7.5 py-10 md2:px-16.6 lg2:px-24.6 lg2:py-20">
        <div className="flex justify-between items-end mb-10 lg2:mb-14.5">
          <Commontittle
            tittle="Top creators"
            pera="Checkout Top Rated Creators on the NFT Marketplace"
            button="View Rankings"
            link="/ranking"
          />
        </div>
        <div className="grid grid-cols-1 gap-5 md2:grid-cols-2 md2:gap-7.5 lg2:grid-cols-4">
          {profile.map((data, index) => {
            return (
              <Profile
                key={index}
                name={data.name}
                img={data.img}
                sales={data.sales}
                number={index}
              />
            );
          })}
        </div>
      </section>
      <section className="px-7.5 py-10 md2:px-16.6 lg2:px-24.6 lg2:py-20">
        <div className="mb-10 lg2:mb-14.5">
          <h2 className="text-28 leading-140 font-semibold text-white lg2:text-38 lg2:leading-120">
            Browse Categories
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-5 md2:gap-7.5 md2:grid-cols-4">
          {categories.map((data, index) => {
            return (
              <CategoriesCird
                key={index}
                img={data.img}
                svg={data.svg}
                tittle={data.tittle}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Home;

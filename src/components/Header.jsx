import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import logosmall from "../assets/logosmall.png";
import logomidium from "../assets/logomidium.png";
import logobig from "../assets/logobig.png";
import { Link, NavLink } from "react-router";

function Header() {
  const [show, setshow] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".logo,ul li, .nav__btn__box", {
      y: -40,
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
      stagger: 0.3,
    });
  });
  return (
    <>
      <header className="flex justify-between items-center relative py-3.6 px-7.5 md2:px-12.5 lg2:py-5 font-work__sans">
        <Link to="/" className="logo">
          <img src={logosmall} alt="" className="block md2:hidden" />
          <img
            src={logomidium}
            alt=""
            className="hidden md2:block lg2:hidden"
          />
          <img src={logobig} alt="" className="hidden lg2:block" />
        </Link>
        <div
          className={`flex absolute top-full flex-col w-full left-0 items-center bg-bag transition-all duration-300 ease-initial lg2:relative lg2:flex-row lg2:w-fit lg2:transition-none  ${
            show ? "translate-x-0" : "translate-x-[-200%] lg2:translate-x-0"
          }`}
        >
          <ul className="flex flex-col w-full items-center lg2:flex-row lg2:w-fit lg2:mr-2.5 lg2:gap-2.5">
            <li>
              <NavLink
                onClick={() => setshow(!show)}
                to="/marketplace"
                className="block py-3 px-5 text-base leading-140 font-semibold text-white hover:scale-95 duration-300 transition-all ease-in-out"
              >
                <span className="relative">Marketplace</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setshow(!show)}
                to="/ranking"
                className="block py-3 px-5 text-base leading-140 font-semibold text-white hover:scale-95 duration-300 transition-all ease-in-out"
              >
                <span className="relative">Rankings</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setshow(!show)}
                to="/cannect"
                className="block py-3 px-5 text-base leading-140 font-semibold text-white hover:scale-95 duration-300 transition-all ease-in-out"
              >
                <span className="relative">Connect a wallet</span>
              </NavLink>
            </li>
          </ul>
          <div className="nav__btn__box">
            <Link
              onClick={() => setshow(!show)}
              to="/signin"
              className="nav__btn flex py-5 px-7.5 w-fit bg-action text-white justify-center gap-3 items-center text-base leading-140 font-semibold rounded-20 hover:scale-95 transition-all duration-300 ease-in-out"
            >
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 3.125C7.58375 3.125 5.625 5.08375 5.625 7.5C5.625 9.91625 7.58375 11.875 10 11.875C12.4162 11.875 14.375 9.91625 14.375 7.5C14.375 5.08375 12.4162 3.125 10 3.125ZM4.375 7.5C4.375 4.3934 6.8934 1.875 10 1.875C13.1066 1.875 15.625 4.3934 15.625 7.5C15.625 10.6066 13.1066 13.125 10 13.125C6.8934 13.125 4.375 10.6066 4.375 7.5Z"
                    fill="white"
                  />
                  <path
                    d="M10.0001 13.124C8.57374 13.124 7.17251 13.4995 5.93728 14.2128C4.70205 14.926 3.67634 15.9518 2.96327 17.1872C2.79071 17.4861 2.40848 17.5886 2.10953 17.416C1.81058 17.2435 1.70812 16.8612 1.88068 16.5623C2.70345 15.1369 3.88696 13.9532 5.31223 13.1303C6.7375 12.3073 8.3543 11.874 10.0001 11.874C11.6459 11.874 13.2627 12.3073 14.688 13.1303C16.1132 13.9532 17.2968 15.1369 18.1195 16.5623C18.2921 16.8612 18.1896 17.2435 17.8907 17.416C17.5917 17.5886 17.2095 17.4861 17.0369 17.1872C16.3239 15.9518 15.2982 14.926 14.0629 14.2128C12.8277 13.4995 11.4265 13.124 10.0001 13.124Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
        <div onClick={() => setshow(!show)} className="lg2:hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12Z"
              fill="white"
            />
            <path
              d="M3 6C3 5.58579 3.33579 5.25 3.75 5.25H15C15.4142 5.25 15.75 5.58579 15.75 6C15.75 6.41421 15.4142 6.75 15 6.75H3.75C3.33579 6.75 3 6.41421 3 6Z"
              fill="white"
            />
            <path
              d="M3 18C3 17.5858 3.33579 17.25 3.75 17.25H15C15.4142 17.25 15.75 17.5858 15.75 18C15.75 18.4142 15.4142 18.75 15 18.75H3.75C3.33579 18.75 3 18.4142 3 18Z"
              fill="white"
            />
          </svg>
        </div>
      </header>
    </>
  );
}

export default Header;
